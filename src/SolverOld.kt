fun Board<Int>.solve(): Board<Int>? {
    val numbers = withIndex().filter { it.value > 0 }
    val toGo = numbers.map { it.value - 1 }.toList()
    val white = numbers.fold(0, { z, v -> z + v.value })
    if (rows * columns - white < 0)
        return null

    fun Board<Int>.paintYellow() {
        this.withIndex().filter { it.value == 0 }.forEach {
            val (x, y) = it.position
            this[x, y] = -2
        }
    }

    fun Board<Int>.connected(): Boolean {
        val copy = this.copy()

        val blacks = withIndex().filter { it.value == -1 || it.value == -2 }
        val size = blacks.count()
        if (size > 0) {
            val stack = mutableListOf(blacks.first().position)
            var count = 0
            while (!stack.isEmpty()) {
                val p = stack.first()
                stack -= p
                val (x, y) = p
                if ((x >= 0 && x < columns && y >= 0 && y < rows) && (copy[x, y] == -1 || copy[x, y] == -2)) {
                    count++
                    copy[x, y] = -10
                    stack += Pair(x - 1, y)
                    stack += Pair(x + 1, y)
                    stack += Pair(x, y + 1)
                    stack += Pair(x, y - 1)
                }
            }

            return count == size
        }

        return true
    }

    fun Board<Int>.value(x: Int, y: Int): Int? {
        return if (x >= 0 && x < columns && y >= 0 && y < rows)
            this[x, y]
        else
            null
    }

    fun Board<Int>.hasBoxes(): Boolean {
        for (x in 0..columns - 2)
            for (y in 0..rows - 2) {
                val list = listOf(Pair(x, y), Pair(x + 1, y), Pair(x, y + 1), Pair(x + 1, y + 1))
                val c = list.map { this[it.first, it.second] == -1 }.filter { it }.size
                if (c == 4)
                    return true
            }

        return false
    }

    fun Board<Int>.neighbors(x: Int, y: Int): List<PositionValue<Int>> {
        val left = Pair(x - 1, y)
        val right = Pair(x + 1, y)
        val up = Pair(x, y - 1)
        val down = Pair(x, y + 1)

        val neighbors = listOf(left, right, up, down)
        val values = neighbors.map { PositionValue(it, value(it.first, it.second) ?: -10) }.filter { it.value != -10 }

        return values
    }

    fun Board<Int>.onlyBlackNeighbors(x: Int, y: Int): Boolean {
        val neighbors = neighbors(x, y)
        return neighbors.filter { it.value == -1 }.size == neighbors.size
    }

    fun Board<Int>.fixWithOnlyBlackNeighbors() {
        val wi = withIndex()
        wi.filter { it.value == -2 }.forEach {
            val (x, y) = it.position
            if (onlyBlackNeighbors(x, y))
                this[x, y] = -1
        }
    }

    fun Board<Int>.process(toGo: List<Int>): Boolean {
        withIndex().filter { it.value == -2 }.forEach {
            val (x, y) = it.position
            val n = neighbors(x, y).filter { it.value >= 0 }.map { it.value }.distinct()
            if (n.size >= 2)
                this[x, y] = -1
            if (n.size == 1 && toGo[n.first()] == 0)
                this[x, y] = -1
        }
        fixWithOnlyBlackNeighbors()
        withIndex().filter { it.value == -1 }.forEach {
            val (x, y) = it.position
            val neighbors = neighbors(x, y)
            val (whites, rest) = neighbors.partition { it.value >= 0 }
            if (whites.size == neighbors.size - 1) {
                val fourth = rest.first()
                val (fx, fy) = fourth.position
                if (fourth.value == -2)
                    this[fx, fy] = -1
                else if (fourth.value >= 0)
                    return false
            }
        }
        fixWithOnlyBlackNeighbors()

        return true
    }

    fun Board<Int>.cleanUp() {
        val wi = withIndex()

        wi.filter { it.value < -1 }.forEach {
            val (x, y) = it.position
            this[x, y] = -1
        }
        wi.filter { it.value > 0 }.forEach {
            val (x, y) = it.position
            this[x, y] = 0
        }
        numbers.forEach {
            val (x, y) = it.position
            this[x, y] = it.value
        }
    }

    val b = this.copy()
    b.paintYellow()
    numbers.forEachIndexed { i, p ->
        val (x, y) = p.position
        b[x, y] = i
    }
    b.process(toGo)

    fun solveIn(board: Board<Int>, toGo: List<Int>): Board<Int>? {
        if (!board.process(toGo))
            return null

        // Check if solved
        if (!board.connected())
            return null

        if (board.hasBoxes())
            return null

        val sum = toGo.sum()
        if (sum == 0) {
            board.cleanUp()
            if (board.hasBoxes())
                return null

            return board
        }

        val candidates = board.withIndex().filter { it.value == -2 }.toList()
        if (candidates.size < sum)
            return null

        // Iterate through candidates
        candidates.forEach {
            val (x, y) = it.position
            val neighbors = board.neighbors(x, y).map { it.value }.filter { it >= 0 }
            if (neighbors.size > 0) {
                val n = neighbors.first()
                if (toGo[n] > 0) {
                    val copy = board.copy()
                    copy[x, y] = n
                    val tgc = toGo.toMutableList()
                    tgc[n] -= 1

                    val result = solveIn(copy, tgc)
                    if (result != null)
                        return result
                }
            }
        }
        return null
    }

    return solveIn(b, toGo)
}