import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../types/todos'

const mockDataTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    completed: false,
    priority: 'high',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: crypto.randomUUID(),
    completed: false,
    priority: 'medium',
    content: 'Lorem Ipsum is simply dummy',
  },
  {
    id: crypto.randomUUID(),
    completed: true,
    priority: 'low',
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

    completedTodo: (state, action: PayloadAction<Todo['id']>) => {
      const currentTodo = state.todos.find((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    },

    removeTodo: (state, action: PayloadAction<Todo['id']>) => {
      const indexCurrentTodo = state.todos.findIndex((todo) => todo.id === action.payload)
      state.todos.splice(indexCurrentTodo, 1)
    },

    priorityChange: (
      state,
      action: PayloadAction<{ id: string; selectedValue: Todo['priority'] }>
    ) => {
      const currentTodo = state.todos.find((todo) => todo.id === action.payload.id)
      if (currentTodo) {
        currentTodo.priority = action.payload.selectedValue
      }
    },
  },
})

export default todosSlice.reducer
export const { addTodo, completedTodo, removeTodo, priorityChange } = todosSlice.actions
