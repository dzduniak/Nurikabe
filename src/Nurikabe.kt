import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.dom.appendText
import kotlin.dom.build.addElement
import kotlin.dom.onClick

val example5x5 = """_ 1 _ 1 _
_ _ _ _ _
3 _ _ _ _
_ _ _ _ _
3 _ _ _ 3"""

val example7x7 = """_ _ _ 3 _ 1 _
_ _ _ _ _ _ _
2 _ _ _ _ _ _
_ 4 _ _ _ 2 _
_ _ _ _ _ _ 5
_ _ _ _ _ _ _
_ 4 _ 1 _ _ _"""

val example10x10 = """_ _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ 5 _ _ _
_ _ 5 _ _ _ _ 2 _ _
_ 3 _ 5 _ _ 1 _ _ _
_ _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _
_ _ _ 2 _ _ 1 _ 4 _
_ _ 3 _ _ _ _ 1 _ _
_ _ _ 9 _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _"""


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
        refresh()
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

        val examples = document.getElementById("examples") as HTMLElement
        fun addExample(string: String, action: () -> Unit) {
            examples.addElement("a") {
                this as HTMLAnchorElement
                textContent = string
                href = "index.html"
                onClick { e ->
                    e.preventDefault()
                    action()
                }
            }
        }
        addExample("5x5") {
            loadBoard(parse(example5x5))
        }
        examples.appendText(", ")
        addExample("7x7") {
            loadBoard(parse(example7x7))
        }
        examples.appendText(", ")
        addExample("10x10") {
            loadBoard(parse(example10x10))
        }
    }
}