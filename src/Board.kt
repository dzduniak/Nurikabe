class PositionValue<out T>(val position: Pair<Int, Int>, val value: T) {
    constructor(x: Int, y: Int, value: T) : this(Pair(x, y), value)

    override fun toString(): String {
        return "[$position : $value]"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true

        other as PositionValue<*>

        if (position != other.position) return false

        return true
    }

    override fun hashCode(): Int {
        return position.hashCode()
    }
}

class Board<T>(val rows: Int, val columns: Int, list: List<T>) : Iterable<T> {
    private val values: MutableList<T> = list.toMutableList()

    val rowsList: List<List<T>>
        get() = (0..(rows - 1)).map { row(it) }
    val columnsList: List<List<T>>
        get() = (0..(columns - 1)).map { column(it) }
    val size = rows * columns

    constructor(rows: Int, columns: Int, init: T) : this(rows, columns, (1..rows * columns).map { init })

    fun offset(x: Int, y: Int) = y * columns + x

    fun inBounds(x: Int, y: Int) =
            x >= 0 && x < columns && y >= 0 && y < rows

    operator fun get(p: Pair<Int, Int>) = this[p.first, p.second]

    operator fun set(p: Pair<Int, Int>, value: T) {
        this[p.first, p.second] = value
    }

    operator fun get(offset: Int) = values[offset]

    operator fun set(offset: Int, value: T) {
        values[offset] = value
    }

    operator fun get(x: Int, y: Int): T {
        if (inBounds(x, y))
            return values[offset(x, y)]
        else
            throw IndexOutOfBoundsException()
    }


    operator fun set(x: Int, y: Int, value: T) {
        if (inBounds(x, y)) {
            values[offset(x, y)] = value
        } else
            throw IndexOutOfBoundsException()
    }

    override fun iterator(): Iterator<T> = values.iterator()

    fun row(i: Int) = (0..(columns - 1)).map { get(it, i) }

    fun column(i: Int) = (0..(rows - 1)).map { get(i, it) }

    fun copy() = Board(rows, columns, values)

    fun withIndex(): Sequence<PositionValue<T>> = object : Sequence<PositionValue<T>> {
        override fun iterator(): Iterator<PositionValue<T>> = object : Iterator<PositionValue<T>> {
            var x = 0
            var y = 0

            override fun hasNext(): Boolean = y < rows && x < columns

            override fun next(): PositionValue<T> {
                val r = PositionValue(x, y, this@Board[x, y])
                x += 1
                if (x >= columns) {
                    x = 0
                    y += 1
                }

                return r
            }
        }
    }

    fun neighbors(p: Pair<Int, Int>): List<PositionValue<T>> = neighbors(p.first, p.second)

    fun neighbors(x: Int, y: Int): List<PositionValue<T>> {
        val left = Pair(x - 1, y)
        val right = Pair(x + 1, y)
        val up = Pair(x, y - 1)
        val down = Pair(x, y + 1)

        val neighbors = listOf(up, right, down, left).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    fun neighbors8(x: Int, y: Int): List<PositionValue<T>> {
        val left = Pair(x - 1, y)
        val right = Pair(x + 1, y)
        val up = Pair(x, y - 1)
        val down = Pair(x, y + 1)

        val upLeft = Pair(x - 1, y - 1)
        val upRight = Pair(x + 1, y - 1)
        val downLeft = Pair(x - 1, y + 1)
        val downRight = Pair(x + 1, y + 1)

        val neighbors = listOf(up, upRight, right, downRight, down,
                downLeft, left, upLeft).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    fun neighborsNW(x: Int, y: Int): List<PositionValue<T>> {
        val left = Pair(x - 1, y)
        val up = Pair(x, y - 1)
        val upLeft = Pair(x - 1, y - 1)

        val neighbors = listOf(left, upLeft, up).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    fun neighborsNE(x: Int, y: Int): List<PositionValue<T>> {
        val right = Pair(x + 1, y)
        val up = Pair(x, y - 1)
        val upRight = Pair(x + 1, y - 1)

        val neighbors = listOf(up, upRight, right).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    fun neighborsSE(x: Int, y: Int): List<PositionValue<T>> {
        val right = Pair(x + 1, y)
        val down = Pair(x, y + 1)
        val downRight = Pair(x + 1, y + 1)

        val neighbors = listOf(right, downRight, down).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    fun neighborsSW(x: Int, y: Int): List<PositionValue<T>> {
        val left = Pair(x - 1, y)
        val down = Pair(x, y + 1)
        val downLeft = Pair(x - 1, y + 1)

        val neighbors = listOf(down, downLeft, left).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    inline fun depthFirst(x: Int, y: Int, visitor: (PositionValue<T>) -> Boolean) {
        val stack = Stack<PositionValue<T>>()
        val visited = mutableSetOf<PositionValue<T>>()
        stack.push(PositionValue(x, y, get(x, y)))

        while (!stack.isEmpty) {
            val p = stack.pop()
            if (visited.contains(p))
                continue

            val c = visitor(p)
            visited += p

            if (c) {
                val (nx, ny) = p.position
                neighbors(nx, ny).forEach { stack.push(it) }
            }
        }
    }

    inline fun depthFirst(p: Pair<Int, Int>, visitor: (PositionValue<T>) -> Boolean) {
        depthFirst(p.first, p.second, visitor)
    }

    override fun toString(): String =
            rowsList.joinToString(separator = ",  ", prefix = "[ ", postfix = " ]", transform = { it.joinToString() })

    override fun equals(other: Any?): Boolean {
        if (this === other) return true

        other as Board<*>

        if (rows != other.rows) return false
        if (columns != other.columns) return false
        if (values != other.values) return false

        return true


    }

    override fun hashCode(): Int {
        var result = rows
        result = 31 * result + columns
        result = 31 * result + values.hashCode()
        result = 31 * result + size
        return result
    }
}