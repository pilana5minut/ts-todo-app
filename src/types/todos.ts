export type Todo = {
  id: number
  completed: boolean
  priority: 'important' | 'not-important' | 'medium-important'
  content: string
}
