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

        fun black() = board.withIndex().filter { it.value == -1 }
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
                /*helper(black()) { x, y, n ->
                    val (whts, rest) = n.partition { it.value >= 0 }
                    if (whts.size == n.size - 1) {
                        val (nx, ny) = rest.first().position
                        val restv = board[nx, ny]
                        if (restv == -2) {
                            changes++
                            if (paintBlack(nx, ny))
                                return false
                        }
                    }
                }*/

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