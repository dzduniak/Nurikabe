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