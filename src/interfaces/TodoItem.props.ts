export interface ITodo {
  id: number
  title: string
  complete: boolean
}

export interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}