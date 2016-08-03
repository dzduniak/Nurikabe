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
    return fill(p.first,  p.second, color, toReplace)
}

fun Board<Int>.fill(p: Pair<Int, Int>, color: Int): Int {
    val toReplace = this[p]
    return fill(p.first,  p.second, color) { it == toReplace }
}

fun Board<Int>.putInClipboard() {
    val string = "${this.columns} ${this.rows} " + this.joinToString(separator = " ")
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
    val numbers = string.replace(",", "")
    val regex = Regex("""-?[0-9]+""")
    val matches = regex.findAll(numbers).toList().map { it.value }
    matches.forEach { println(it) }
    val cols = parseInt(matches[0])
    val rows = parseInt(matches[1])
    println("$cols x $rows")

    val board = Board(rows, cols, 0)
    for (i in 0..board.size - 1)
        board[i] = parseInt(matches[i + 2])

    return board
}