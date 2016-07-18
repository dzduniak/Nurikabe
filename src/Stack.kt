class Stack<E> : Iterable<E> {
    private val list = mutableListOf<E>()

    val size: Int
        get() = list.size

    val isEmpty: Boolean
        get() = size == 0

    fun push(element: E) {
        list += element
    }

    fun pop() = list.removeAt(list.size - 1)

    override fun iterator() = list.iterator()
}