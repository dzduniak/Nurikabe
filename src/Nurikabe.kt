import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.dom.build.addElement
import kotlin.dom.onClick

class Nurikabe() {
    private val rowsInput = document.getElementById("rows") as HTMLInputElement
    private val columnsInput = document.getElementById("columns") as HTMLInputElement

    val table = document.getElementById("board") as HTMLTableElement
    private var tbody = table.tBodies[0] as HTMLTableSectionElement
    val rows: Int
        get() = rowsInput.valueAsNumber.floor()
    val columns: Int
        get() = columnsInput.valueAsNumber.floor()
    var board = Board(rows, columns, 0)
    private val next = document.getElementById("next") as HTMLButtonElement

    fun update() {
        board = Board(rows, columns, 0)

        tbody.remove()
        tbody = table.createTBody() as HTMLTableSectionElement
        board.rowsList.forEachIndexed { y, list ->
            val tr = tbody.addElement("tr") { } as HTMLTableRowElement
            list.forEachIndexed { x, v ->
                val td = tr.addElement("td") {} as HTMLElement
                td.onmouseup = { e ->
                    val me = e as MouseEvent
                    when (me.button.toInt()) {
                        0 -> board[x, y]++
                        2 -> if (board[x, y] > -1)
                            board[x, y]--
                        else -> board.fill(x, y, -1)
                    }
                    refresh()
                    true
                }
            }
        }
        next.style.visibility = "hidden"
    }

    private fun refresh() {
        val cells = tbody.getElementsByTagName("td")
        board.forEachIndexed { i, v ->
            val cell = cells[i] as HTMLElement
            cell.textContent = if (v > 0) v.toString() else ""
            cell.className = when (v) {
                -2 -> "yellow"
                -1 -> "black"
                else -> "white"
            }
        }
    }

    init {
        table.ondblclick = { false }
        table.addEventListener("selectstart", { it.preventDefault() })
        table.oncontextmenu = { false }
        document.getElementById("update").onClick { update() }
        val fail = document.getElementById("notsolved") as HTMLParagraphElement
        document.getElementById("solve").onClick {
            fail.style.visibility = "hidden"
            val solution = board.solve()
            if (solution != null) {
                board = solution
                refresh()
            } else {
                fail.style.visibility = "visible"
            }
        }
        update()
    }
}