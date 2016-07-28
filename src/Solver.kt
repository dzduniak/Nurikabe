private fun Iterable<PositionValue<Int>>.black() = filter { it.value == -1 }

private fun Board<Int>.connected(): Boolean {
    val blacks = withIndex().filter { it.value <= -1 }
    var count = blacks.count()
    if (count == 0)
        return true
    val (x, y) = blacks.first().position
    depthFirst(x, y) {
        if (it.value <= -1) {
            count--
            return@depthFirst true
        }

        return@depthFirst false
    }

    return count == 0
}

private fun Board<Int>.paintYellow() {
    this.withIndex().filter { it.value == 0 }.forEach {
        val (x, y) = it.position
        this[x, y] = -2
    }
}

private fun Board<Int>.isBox(x: Int, y: Int): Boolean {
    if (this[x, y] != -1)
        return false

    val nw = neighborsNW(x, y).black().size == 3
    val ne = neighborsNE(x, y).black().size == 3
    val sw = neighborsSW(x, y).black().size == 3
    val se = neighborsSE(x, y).black().size == 3

    if (nw || ne || sw || se)
        return true

    return false
}

class Counter(init: Int = 0) {
    var value = init
        private set

    fun increment() {
        value++
    }

    fun decrement() {
        value--
    }

    fun copy() = Counter(value)

    override fun toString(): String {
        return "$value"
    }


}

class Solver(input: Board<Int>) {
    private val numbers = input.withIndex().filter { it.value > 0 }.toList()
    private val board = input.copy().preprocess()
    private val hungry = numbers.withIndex().filter { it.value.value > 1 }.map { it.index }.toSet()
    private val blacks = board.size - numbers.map { it.value }.sum() - board.filter { it == -1 }.count()

    private fun Board<Int>.preprocess(): Board<Int> {
        paintYellow()
        numbers.forEachIndexed { i, p ->
            val (x, y) = p.position
            this[x, y] = i
        }
        return this
    }

    private fun Board<Int>.postprocess() {
        val wi = withIndex()
        wi.filter { it.value >= 0 }.forEach {
            val (x, y) = it.position
            this[x, y] = 0
        }
        numbers.forEach {
            val (x, y) = it.position
            this[x, y] = it.value
        }
    }

    private var last = board
    private fun solveIn(board: Board<Int>, offset: Int, blacks: Counter, hungry: MutableSet<Int>): Board<Int>? {
        last = board

        fun yellow() = board.withIndex().filter { it.value == -2 }

        fun paintBlack(x: Int, y: Int): Boolean {
            blacks.decrement()
            board[x, y] = -1
            return board.isBox(x, y)
        }

        fun paintBlack(offset: Int): Boolean {
            val y = offset / board.columns
            val x = offset % board.columns
            return paintBlack(x, y)
        }

        fun process(offset: Int = offset): Boolean {
            inline fun helper(seq: Sequence<PositionValue<Int>>, action: (Int, Int, List<PositionValue<Int>>) -> Unit) {
                seq.forEach {
                    val (x, y) = it.position
                    val n = board.neighbors(x, y)
                    action(x, y, n)
                }
            }

            do {
                var changes = 0
                hungry.forEach {
                    val h = it
                    val n = numbers[h]
                    val (x, y) = n.position
                    val off = board.offset(x, y)

                    if (off < offset) {
                        var counter = n.value
                        var canExpand = false
                        board.depthFirst(x, y) {
                            val (dx, dy) = it.position
                            val value = it.value
                            if (board.offset(dx, dy) < offset) {
                                if (value >= 0 && value != h)
                                    return false
                                if (value == -1)
                                    return@depthFirst false
                                counter--
                                board[dx, dy] = h
                                if (value == -2)
                                    changes++
                                return@depthFirst true

                            } else if (value == -2) {
                                canExpand = true
                            }

                            return@depthFirst false
                        }

                        if (counter == 0)
                            hungry.remove(h)

                        if (counter < 0)
                            return false

                        if (counter > 0 && !canExpand)
                            return false
                    }
                }
                helper(yellow()) { x, y, n ->
                    val whts = n.map { it.value }.filter { it >= 0 }.distinct()
                    if (whts.size >= 2 || (whts.size == 1 && !hungry.contains(whts.first()))) {
                        changes++
                        if (paintBlack(x, y))
                            return false
                    }
                }
                helper(yellow()) { x, y, n ->
                    val blks = n.map { it.value }.filter { it == -1 }
                    if (blks.size == n.size) {
                        changes++
                        if (paintBlack(x, y))
                            return false
                    }
                }
                val aps = mutableListOf<PositionValue<Int>>()
                val visited = mutableSetOf<PositionValue<Int>>()
                val disc = mutableMapOf<PositionValue<Int>, Int>()
                val low = mutableMapOf<PositionValue<Int>, Int>()
                val parent = mutableMapOf<PositionValue<Int>, PositionValue<Int>>()
                var time = 0
                fun findAP(u: PositionValue<Int>) {
                    // Count of children in DFS Tree
                    var children = 0

                    // Mark the current node as visited
                    visited.add(u)

                    // Initialize discovery time and low value
                    time++
                    disc[u] = time
                    low[u] = time

                    // Go through all vertices aadjacent to this
                    val (x, y) = u.position
                    val neighbors = board.neighbors(x, y).filter { it.value <= -1 }
                    neighbors.forEach {
                        val v = it  // v is current adjacent of u

                        // If v is not visited yet, then make it a child of u
                        // in DFS tree and recur for it
                        if (!visited.contains(v)) {
                            children++
                            parent[v] = u
                            findAP(v)

                            // Check if the subtree rooted with v has a connection to
                            // one of the ancestors of u
                            low[u] = Math.min(low[u] ?: 0, low[v] ?: 0)

                            // u is an articulation point in following cases

                            // (1) u is root of DFS tree and has two or more chilren.
                            if (parent[u] == null && children > 1)
                                aps.add(u)

                            // (2) If u is not root and low value of one of its child
                            // is more than discovery value of u.
                            if (parent[u] != null && low[v] ?: 0 >= disc[u] ?: 0)
                                aps.add(u)
                        }

                        // Update low value of u for parent function calls.
                        else if (v != parent[u])
                            low[u] = Math.min(low[u] ?: 0, disc[v] ?: 0)
                    }
                }

                val first = board.withIndex().filter { it.value <= -1 }.firstOrNull()
                if (first != null)
                    findAP(first)
                aps.forEach {
                    val (x, y) = it.position
                    if (board[x, y] == -2) {
                        changes++
                        if (paintBlack(x, y))
                            return false
                    }
                }
            } while (changes > 0)

            return true
        }

        if (offset >= 0) {
            if (board[offset] != -2)
                return null
            if (paintBlack(offset))
                return null
        }

        if (!process())
            return null

        if (!board.connected())
            return null

        // Check if solved
        if (blacks.value == 0 && hungry.isEmpty())
            return board

        if (blacks.value == 0) {
            if (!process(board.size))
                return null
            if (!board.connected())
                return null
            if (!hungry.isEmpty())
                return null

            return board
        }

        if (hungry.isEmpty()) {
            yellow().forEach {
                val (x, y) = it.position
                if (paintBlack(x, y))
                    return null
            }
            if (!board.connected())
                return null

            return board
        }

        // Iterate through candidates
        for (i in (offset + 1)..(board.size - 1)) {
            val r = solveIn(board.copy(), i, blacks.copy(), hungry.toMutableSet())
            if (r != null)
                return r
        }

        return null
    }

    fun solve(): Board<Int>? {
        val solution = solveIn(board, -1, Counter(blacks), hungry.toMutableSet())
        solution?.postprocess()
        return solution
    }
}