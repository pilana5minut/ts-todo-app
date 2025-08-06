import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../types/todos'

const mockDataTodos: Todo[] = [
  {
    id: Date.now(),
    completed: false,
    priority: 'important',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Date.now(),
    completed: true,
    priority: 'not-important',
    content:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
]

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: mockDataTodos,
}

export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
  },
})

export default todosSlice.reducer
export const { addTodo } = todosSlice.actions
