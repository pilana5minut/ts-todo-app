import { NewTodoForm } from './features/todos/NewTodoForm'
import { TodoList } from './features/todos/TodoList'
import cl from './App.module.css'

function App() {
  return (
    <div className={cl.app}>
      <NewTodoForm />
      <TodoList />
    </div>
  )
}

export default App
