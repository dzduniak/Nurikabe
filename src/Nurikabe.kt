import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.dom.build.addElement
import kotlin.dom.onClick

class Nurikabe() {
    private val rowsInput = document.getElementById("rows") as HTMLInputElement
    private val columnsInput = document.getElementById("columns") as HTMLInputElement
    private val solve = document.getElementById("solve") as HTMLButtonElement
    private val next = document.getElementById("next") as HTMLButtonElement
    private val update = document.getElementById("update") as HTMLButtonElement
    private val fail = document.getElementById("notsolved") as HTMLParagraphElement
    private val table = document.getElementById("board") as HTMLTableElement
    private var tbody = table.tBodies[0] as HTMLTableSectionElement
    private val debug = document.getElementById("debug") as HTMLParagraphElement

    val rows: Int
        get() = rowsInput.valueAsNumber.floor()
    val columns: Int
        get() = columnsInput.valueAsNumber.floor()
    var board = Board(rows, columns, 0)

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
                    val value = board[x, y]
                    when (me.button.toInt()) {
                        0 -> if (value == DOT) board[x, y] = 0 else board[x, y]++
                        1 -> board[x, y] = DOT
                        2 -> if (value == DOT) board[x, y] = BLACK else
                            if (value > -1) board[x, y]--
                    }
                    refresh()
                    true
                }
            }
        }
        next.style.visibility = "hidden"
    }

    private var dirty: Boolean = false
    private fun refresh() {
        dirty = true;
        val cells = tbody.getElementsByTagName("td")
        board.forEachIndexed { i, v ->
            val cell = cells[i] as HTMLElement
            cell.textContent = if (v > 0) v.toString() else ""
            cell.className = when (v) {
                DOT -> "dot"
                YELLOW -> "yellow"
                BLACK -> "black"
                else -> "white"
            }
        }
    }

    init {
        table.ondblclick = { false }
        table.addEventListener("selectstart", { it.preventDefault() })
        table.oncontextmenu = { false }
        update.onClick { update() }
        update()

        var solver = Solver(board)
        fun solve(next: Boolean = false) {
            if (!next) solver = Solver(board)
            val result = solver.nextSolution()
            if (result != null) {
                this.next.style.visibility = "visible"
                fail.style.display = "none"

                board = result
                refresh()
            } else {
                this.next.style.visibility = "hidden"
                fail.style.display = "block"

                /*board = solver.current
                refresh()*/
            }
            dirty = false
        }
        solve.onClick { solve() }
        next.onClick { solve(true) }

        var counter = 0
        fun HTMLParagraphElement.button(string: String = "Technique", index: Boolean = true, a: Solver.() -> Unit) {
            this.addElement("button") {
                textContent = if (index) "$string $counter" else string
                onClick {
                    if (dirty)
                        solver = Solver(board)
                    solver.a()
                    board = solver.current
                    refresh()
                    dirty = false
                }
            }
            this.addElement("div") { className = "divider" }
            counter++
        }

        debug.button("Next step", false) { nextStep() }
        /*debug.button { techn0() }
        debug.button { techn1() }
        debug.button { techn2() }
        debug.button { techn3() }
        debug.button { techn4() }
        debug.button { techn5() }
        debug.button { techn6() }
        debug.button { techn7() }

        debug.button("Apply all", false) { applyAll() }*/
    }
}