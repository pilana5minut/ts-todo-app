import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../types/todos'

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [],
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
