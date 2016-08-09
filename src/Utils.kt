import org.w3c.dom.events.Event
import kotlin.Pair
import kotlin.browser.document

fun Double.floor() = Math.floor(this)
fun Int.abs() = if (this > 0) this else -this

fun Board<Int>.fill(x: Int, y: Int, color: Int, toReplace: (Int) -> Boolean): Int {
    var filled = 0

    depthFirst(x, y) {
        if (toReplace(it.value)) {
            filled++
            this[it.position] = color
            return@depthFirst true
        }
        return@depthFirst false
    }

    return filled
}

fun Board<Int>.fill(p: Pair<Int, Int>, color: Int, toReplace: (Int) -> Boolean): Int {
    return fill(p.first, p.second, color, toReplace)
}

fun Board<Int>.fill(p: Pair<Int, Int>, color: Int): Int {
    val toReplace = this[p]
    return fill(p.first, p.second, color) { it == toReplace }
}

fun Board<Int>.putInClipboard() {
    val string = this.rowsList.joinToString(separator = "\r\n") {
        it.joinToString(separator = " ") {
            when (it) {
                BLACK -> "#"
                YELLOW -> "?"
                DOT -> "."
                0 -> "_"
                else -> it.toString()
            }
        }
    }
    val listener: (Event) -> Unit = { e ->
        @Suppress("UNUSED_VARIABLE")
        val s = string
        js("e.clipboardData.setData('text/plain', s); e.preventDefault();")
    }
    document.addEventListener("copy", listener)
    document.execCommand("copy");
    document.removeEventListener("copy", listener)
}

fun parse(string: String): Board<Int> {
    val lines = string.split(Regex("""\r?\n"""))
    val numbers = lines.map { it.split(" ") }

    val board = Board(lines.size, numbers.first().size, 0)
    for (y in 0..board.rows - 1)
        for (x in 0..board.columns - 1) {
            val value = numbers[y][x]
            board[x, y] = when (value) {
                "#" -> BLACK
                "?" -> YELLOW
                "." -> DOT
                "_" -> 0
                else -> parseInt(value)
            }
        }

    return board
}