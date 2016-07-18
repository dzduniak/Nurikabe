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

    constructor(rows: Int, columns: Int, init: T) : this(rows, columns, (1..rows * columns).map { init })

    operator fun get(x: Int, y: Int): T {
        if (inBounds(x, y))
            return values[y * columns + x]
        else
            throw IndexOutOfBoundsException()
    }

    fun inBounds(x: Int, y: Int) =
            x >= 0 && x < columns && y >= 0 && y < rows


    operator fun set(x: Int, y: Int, b: T) {
        if (x >= 0 && x < columns && y >= 0 && y < rows) {
            values[y * columns + x] = b
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

    fun neighbors(x: Int, y: Int): List<PositionValue<T>> {
        val left = Pair(x - 1, y)
        val right = Pair(x + 1, y)
        val up = Pair(x, y - 1)
        val down = Pair(x, y + 1)

        val neighbors = listOf(up, left, right, down).filter { inBounds(it.first, it.second) }

        return neighbors.map { PositionValue(it, get(it.first, it.second)) }
    }

    fun depthFirst(x: Int, y: Int, visitor: (PositionValue<T>) -> Boolean) {
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

    override fun toString(): String = rowsList.joinToString(separator = ",  ", prefix = "[ ", postfix = " ]", transform = { it.joinToString() })
}