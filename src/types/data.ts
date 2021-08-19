export interface ITodo {
  id: number
  title: string
  complete: boolean
}

export interface ITodoItemProps extends ITodo {
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}