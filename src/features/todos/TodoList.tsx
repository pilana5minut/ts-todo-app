import { useAppSelector } from '../../hooks/hooks'
import { TodoItem } from './TodoItem'
import cl from './TodoList.module.css'

const TodoList = () => {
  const listTodo = useAppSelector((state) => state.todos.todos)

  return (
    <ul className={cl.todoList}>
      {listTodo.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export { TodoList }
