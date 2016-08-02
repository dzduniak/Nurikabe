val BLACK = -1
val YELLOW = -2
val DOT = -3

fun Board<Int>.white() = withIndex().filter { it.value >= 0 }
fun Board<Int>.dot() = withIndex().filter { it.value == DOT }
fun Board<Int>.whiteOrDot() = withIndex().filter { it.value == DOT || it.value >= 0 }
fun Board<Int>.black() = withIndex().filter { it.value == BLACK }
fun Board<Int>.yellow() = withIndex().filter { it.value == YELLOW }
fun Int.isBlackOrYellow() = this == BLACK || this == YELLOW
fun distance(p1: Pair<Int, Int>, p2: Pair<Int, Int>) =
        (p1.first - p2.first).abs() + (p1.second - p2.second).abs()

var debug: Boolean = false
fun trace(s: Any?) {
    if (debug)
        println(s)
}

class SolverState(val board: Board<Int>, val numbers: List<PositionValue<Int>>,
                  val totalWhiteCount: Int = numbers.map { it.value }.sum(),
                  val toGo: MutableList<Int> = numbers.map { it.value - 1 }.toMutableList(),
                  var fail: Boolean = false, var solved: Boolean = false,
                  val previousNumber: Int = -1, val triedBefore: Set<Pair<Int, Int>> = emptySet()) {

    fun copy() = SolverState(board.copy(), numbers, totalWhiteCount, toGo.toMutableList())

    fun copy(previousNumber: Int = -1, triedBefore: Set<Pair<Int, Int>> = emptySet()) =
            SolverState(board.copy(), numbers, totalWhiteCount, toGo.toMutableList(),
                    previousNumber = previousNumber, triedBefore = triedBefore)

    val current: Board<Int>
        get() {
            checkIfSolved()
            return postprocess(board.copy())
        }

    private fun postprocess(board: Board<Int>): Board<Int> {
        if (solved) board.yellow().forEach { board[it.position] = BLACK }
        board.white().forEach { board[it.position] = if (solved) 0 else DOT }
        numbers.forEach { board[it.position] = it.value }
        return board
    }

    // Solver
    fun nextStep(): List<Lazy<SolverState>> {
        if (fail)
            return emptyList()

        applyAll(false)
        checkIfSolved()

        if (fail)
            return emptyList()

        if (solved)
            return emptyList()

        val yellow = board.yellow().map { it.position }.toList()
        val hungry = toGo.mapIndexed { i, v -> Pair(i, v) }.filter { it.second > 0 }
        if (hungry.size == 0) {
            trace("Fail hungry")
            return emptyList()
        }

        if (toGo.sum() > yellow.size + board.dot().count()) {
            trace("Fail sum")
            return emptyList()
        }

        if (!canExpandDots()) {
            trace("Fail expand dots")
            return emptyList()
        }

        hungry.forEach {
            if (!canExpand(it.first)) {
                trace("Fail expand hungry")
                return emptyList()
            }
        }

        val firstHungry = hungry.reduce { pair1, pair2 -> if (pair1.second < pair2.second) pair1 else pair2 }.first
        val triedBefore = triedBefore.toMutableSet()
        val candidates = yellow.toMutableSet()
        if (firstHungry == previousNumber)
            candidates -= triedBefore

        val result = mutableListOf<Lazy<SolverState>>()
        candidates.filter {
            val neighbors = board.neighbors(it).filter { it.value >= 0 }
            return@filter neighbors.size > 0 && neighbors.first().value == firstHungry
        }.forEach {
            val state = lazy {
                triedBefore += it
                val state = this.copy(firstHungry, triedBefore)
                state.paintNumber(it, firstHungry)
                state
            }
            result.add(state)
        }

        return result
    }

    // Helper functions
    private fun full(i: Int) = if (i == DOT) false else toGo[i] == 0

    private fun hasBoxes(): Boolean {
        for (x in 0..board.columns - 2)
            for (y in 0..board.rows - 2) {
                if (board[x, y] == BLACK
                        && board.neighborsSE(x, y).filter { it.value == BLACK }.size == 3)
                    return true
            }

        return false
    }

    private fun inL(x: Int, y: Int): Boolean {
        fun List<PositionValue<Int>>.black() = filter { it.value == BLACK }

        val nw = board.neighborsNW(x, y).black().size == 3
        val ne = board.neighborsNE(x, y).black().size == 3
        val sw = board.neighborsSW(x, y).black().size == 3
        val se = board.neighborsSE(x, y).black().size == 3

        if (nw || ne || sw || se)
            return true

        return false
    }

    private fun inL(p: Pair<Int, Int>) = inL(p.first, p.second)

    private fun canExpand(n: Int): Boolean {
        var counter = 0
        board.depthFirst(numbers[n].position) {
            val value = it.value
            if (value == YELLOW || value == DOT)
                counter++

            return@depthFirst value == n || value == YELLOW || value == DOT
        }

        return counter >= toGo[n]
    }

    private fun canExpandDots(): Boolean {
        val visitedDots = mutableSetOf<Pair<Int, Int>>()
        fun canExpandDot(p: Pair<Int, Int>): Boolean {
            if (visitedDots.contains(p))
                return true

            var canExpand = false
            board.depthFirst(p) {
                if (it.value == DOT)
                    visitedDots.add(it.position)

                if (it.value == YELLOW) {
                    canExpand = true
                }
                return@depthFirst it.value == DOT
            }
            return canExpand
        }

        board.dot().forEach {
            if (!canExpandDot(it.position))
                return false
        }

        return true
    }

    private fun checkIfSolved() {
        if (!connected()) {
            fail = true
            trace("Fail connected")
            return
        }

        solved = !hasBoxes() && toGo.sum() == 0 && board.yellow().count() == 0 && board.dot().count() == 0
    }

    private fun connected(): Boolean {
        val blacks = board.withIndex().filter { it.value == BLACK }
        var count = blacks.count()
        if (count == 0)
            return true
        val (x, y) = blacks.first().position
        board.depthFirst(x, y) {
            if (it.value == BLACK) {
                count--
            }

            return@depthFirst it.value.isBlackOrYellow()
        }
        return count == 0
    }

    fun fillNumbers() {
        numbers.forEachIndexed { i, n ->
            val filled = board.fill(n.position, i) { it == i || it == DOT }
            toGo[i] = n.value - filled
            //trace(toGo)
            if (toGo[i] < 0) {
                fail = true
                trace("Fail fill numbers")
                return
            }
        }
    }

    private fun paintBlack(p: Pair<Int, Int>): Boolean {
        if (inL(p)) {
            fail = true
            trace("Fail paint black")
            return false
        }
        board[p] = BLACK

        return true
    }

    fun paintNumber(p: Pair<Int, Int>, n: Int): Boolean {
        val neighbors = board.neighbors(p)
        val white = neighbors.filter { it.value >= 0 }.map { it.value }.distinct()
        if (white.size > 1) {
            fail = true
            trace("Fail paint number")
            return false
        }
        board[p] = n
        fillNumbers()

        return true
    }

    fun paintDot(p: Pair<Int, Int>): Boolean {
        val neighbors = board.neighbors(p).filter { it.value >= 0 }.map { it.value }.distinct()
        if (neighbors.size > 1) {
            fail = true
            trace("Fail paint dot")
            return false
        }

        board[p] = DOT
        fillNumbers()

        return true
    }

    // Techniques
    /**
     * Paints unreachable squares black.
     * Apply this technique once in the beginning, since it only depends on initial conditions.
     */
    fun techn0() {
        board.withIndex().forEach {
            val p1 = it.position
            val canReach = numbers.map { distance(p1, it.position) < it.value }.fold(false) { a, b -> a || b }
            if (!canReach) {
                if (board[it.position].isBlackOrYellow())
                    paintBlack(it.position)
                else {
                    fail = true
                    return
                }
            }
        }
    }

    /**
     * Surrounds full islands with black squares.
     * Also paints squares with two or more white neighbors black.
     */
    fun techn1(): Int {
        var changes = 0
        board.yellow().forEach {
            val whites = board.neighbors(it.position).map { it.value }.filter { it >= 0 }.distinct()
            if (board[it.position] == YELLOW && whites.size >= 2 || (whites.size == 1 && full(whites.first()))) {
                if (paintBlack(it.position))
                    changes++
            }
        }
        return changes
    }

    /**
     * Paints squares with only black neighbors black.
     */
    fun techn2(): Int {
        var changes = 0
        board.yellow().forEach {
            val neighbors = board.neighbors(it.position).map { it.value }
            val blacks = neighbors.filter { it == BLACK }
            if (blacks.size == neighbors.size) {
                if (paintBlack(it.position))
                    changes++
            }
        }
        return changes
    }

    /**
     * Expands river from dead ends.
     */
    fun techn3(): Int {
        var changes = 0
        val blacks = board.black().toList()
        var blacksToGo = board.size - (totalWhiteCount + blacks.size)
        blacks.forEach {
            var parent: Pair<Int, Int>? = null
            var current = it.position
            while (true) {
                if (blacksToGo <= 0)
                    return changes
                val neighbors = board.neighbors(current).filter { it.value.isBlackOrYellow() }.map { it.position } - parent
                val first = neighbors.firstOrNull()
                if (neighbors.size == 1 && first != null) {
                    if (board[first] == YELLOW) {
                        if (paintBlack(first)) {
                            changes++
                            blacksToGo--
                        }
                    }
                    parent = current
                    current = first
                } else
                    break
            }
        }
        return changes
    }

    /**
     * Expands islands from dead ends.
     */
    fun techn4(): Int {
        var changes = 0
        board.whiteOrDot().forEach {
            val value = it.value
            var current = it.position
            var parent: Pair<Int, Int>? = null
            while (true) {
                if (full(value))
                    return@forEach

                val neighbors = board.neighbors(current).filter { it.value >= 0 || it.value == YELLOW || it.value == DOT }.map { it.position } - parent
                val first = neighbors.firstOrNull()
                if (neighbors.size == 1 && first != null && (board[first] == value || board[first] == YELLOW)) {
                    if (board[first] == YELLOW) {
                        if (value == DOT)
                            if (paintDot(first))
                                changes++
                            else
                                if (paintNumber(first, value))
                                    changes++
                    }
                    parent = current
                    current = first
                } else
                    break
            }
        }
        return changes
    }

    /**
     * Yellow squares that are bridges are painted black.
     */
    fun techn5(): Int {
        var changes = 0
        val blacks = board.black().toList()
        var count = blacks.size
        if (count > 0) {
            val first = blacks.first()
            board.yellow().forEach {
                val p = it.position
                var c = count

                board[p] = DOT
                board.depthFirst(first.position) {
                    if (it.value.isBlackOrYellow()) {
                        if (it.value == BLACK)
                            c--
                        return@depthFirst true
                    }

                    return@depthFirst false
                }
                if (c != 0) {
                    if (paintBlack(p)) {
                        changes++
                        count++
                    }
                } else
                    board[p] = YELLOW
            }
        }
        return changes
    }

    /**
     * Elbows are filled with dots.
     */
    fun techn6(): Int {
        var changes = 0
        board.yellow().forEach {
            val p = it.position
            if (inL(p)) {
                if (paintDot(p))
                    changes++
            }
        }
        return changes
    }

    fun techn7(): Int {
        var changes = 0
        numbers.forEachIndexed { i, it ->
            if (it.value != 2 || toGo[i] == 0)
                return@forEachIndexed

            val numPos = it.position
            val neighbors = board.neighbors(numPos).filter { it.value == YELLOW }
            if (neighbors.size == 2) {
                val first = neighbors[0].position
                val second = neighbors[1].position
                val dx = first.first - second.first
                val dy = first.second - second.second
                if (dx.abs() == 1 && dy.abs() == 1) {
                    val x = if (numPos.first != first.first) first.first else second.first
                    val y = if (numPos.second != first.second) first.second else second.second
                    if (board[x, y] == YELLOW) {
                        if (paintBlack(Pair(x, y)))
                            changes++
                    }
                }
            }
        }

        return changes
    }

    fun applyAll(zero: Boolean = true) {
        var loops = 0
        if (zero) techn0()
        do {
            loops++
            val changes = techn1() + techn2()
            techn6() + techn7() + techn4() + techn3() + techn5()
        } while (changes > 0)
    }
}

class Solver(input: Board<Int>) {
    private val numbers = input.withIndex().filter { it.value > 0 }.toList()
    private val stack = Stack<Lazy<SolverState>>()
    var currentState: SolverState = SolverState(input.copy(), numbers)
    private var previousSolutions = mutableSetOf<Board<Int>>()

    val current: Board<Int>
        get() = currentState.current

    init {
        currentState.board.white().forEach { currentState.board[it.position] = YELLOW }
        currentState.numbers.forEachIndexed { i, p -> currentState.board[p.position] = i }
        currentState.fillNumbers()
        currentState.techn0()

        stack.push(lazy { currentState })
    }

    // Interface
    fun nextSolution(): Board<Int>? {
        while (nextStep()) {
            if (currentState.solved && !previousSolutions.contains(current)) {
                previousSolutions.add(current)
                return current
            }
        }
        return null
    }

    fun nextStep(): Boolean {
        if (stack.isEmpty)
            return false

        val state = stack.pop().value
        currentState = state
        val candidates = state.nextStep()
        candidates.forEach {
            stack.push(it)
        }

        return true
    }
}
