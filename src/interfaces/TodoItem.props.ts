export interface ITodoProps {
  id: number
  title: string
  complete: boolean
}

export interface ITodoMethods extends ITodoProps {
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}