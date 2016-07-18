import org.w3c.dom.Element
import org.w3c.dom.events.MouseEvent

fun Double.floor() = Math.floor(this)

fun MouseEvent.mousePosition(element: Element): Pair<Double, Double> {
    val rect = element.getBoundingClientRect()
    return Pair(clientX - rect.left, clientY - rect.top)
}

fun Board<Int>.fill(x: Int, y: Int, color: Int) {
    val toReplace = this[x, y]
    depthFirst(x, y) {
        if (it.value == toReplace) {
            val (nx, ny) = it.position
            this[nx, ny] = color
            return@depthFirst true
        }
        return@depthFirst false
    }
}