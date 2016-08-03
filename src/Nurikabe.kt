import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTableElement
import org.w3c.dom.HTMLTableRowElement
import org.w3c.dom.HTMLTableSectionElement
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
    private val fail = document.getElementById("notsolved") as HTMLElement
    private val table = document.getElementById("board") as HTMLTableElement
    private var tbody = table.tBodies[0] as HTMLTableSectionElement
    private val debug = document.getElementById("debug") as HTMLElement

    val rows: Int
        get() = rowsInput.valueAsNumber.floor()
    val columns: Int
        get() = columnsInput.valueAsNumber.floor()
    var board = Board(rows, columns, 0)

    fun loadBoard(board: Board<Int>) {
        dirty = true

        rowsInput.valueAsNumber = board.rows.toDouble()
        columnsInput.valueAsNumber = board.columns.toDouble()

        this.board = board
        tbody.remove()
        tbody = table.createTBody() as HTMLTableSectionElement
        this.board.rowsList.forEachIndexed { y, list ->
            val tr = tbody.addElement("tr") { } as HTMLTableRowElement
            list.forEachIndexed { x, v ->
                val td = tr.addElement("td") {} as HTMLElement
                td.onmouseup = { e ->
                    val me = e as MouseEvent
                    val value = board[x, y]
                    when (me.button.toInt()) {
                        0 -> if (value == DOT) this.board[x, y] = 0 else this.board[x, y]++
                        1 -> this.board[x, y] = DOT // board.fill(Pair(x, y), BLACK)
                        2 -> if (value == DOT) this.board[x, y] = BLACK else
                            if (value > -1) this.board[x, y]--
                    }
                    refresh()
                    true
                }
            }
        }
    }

    fun update() {
        loadBoard(Board(rows, columns, 0))
        refresh()

        next.style.visibility = "hidden"
    }

    private var dirty: Boolean = false
    private fun refresh() {
        dirty = true
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

    private fun example1(): Board<Int> {
        val board = Board(11, 9, 0)

        board[0, 0] = 1
        board[7, 0] = 1

        board[1, 1] = 4
        board[4, 1] = 1

        board[8, 2] = 2

        board[5, 3] = 9

        board[1, 5] = 11
        board[7, 5] = 3

        board[6, 7] = 1

        board[3, 8] = 1
        board[7, 8] = 2

        board[0, 9] = 9

        board[8, 10] = 1
        return board
    }

    private fun example2(): Board<Int> {
        val board = Board(11, 9, 0)

        board[7, 0] = 2

        board[0, 1] = 2
        board[5, 1] = 2



        board[1, 4] = 38
        board[4, 4] = 1

        board[3, 5] = 2

        board[5, 6] = 3

        board[4, 8] = 1

        board[0, 9] = 2

        return board
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
        fun HTMLElement.button(string: String, a: Solver.() -> Unit) {
            this.addElement("button") {
                textContent = string
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

        val showDebug = document.getElementById("showdebug") as HTMLElement
        showDebug.onClick { e ->
            e.preventDefault()
            debug.style.display = "block"
            showDebug.style.display = "none"
        }

        debug.button("Next step") { nextStep() }
        debug.button("Techn0") { solver.currentState.techn0() }
        debug.button("Techn1") { solver.currentState.techn1() }
        debug.button("Techn2") { solver.currentState.techn2() }
        debug.button("Techn3") { solver.currentState.techn3() }
        debug.button("Techn4") { solver.currentState.techn4() }
        debug.button("Techn5") { solver.currentState.techn5() }
        debug.button("Techn6") { solver.currentState.techn6() }
        debug.button("Techn7") { solver.currentState.techn7() }
        debug.button("Apply all") { solver.currentState.applyAll() }
        debug.addElement("button") { textContent = "Copy"; onClick { board.putInClipboard() } }

        document.addEventListener("paste", { e ->
            e.preventDefault()
            e.stopPropagation()

            val data = js("e.clipboardData.getData('text/plain');")
            try {
                loadBoard(parse(data))
                refresh()
            } catch (e: Exception) {
                trace("Couldn't load board.")
            }
        })
    }
}