import { useAppSelector } from '../../hooks/hooks'
import { TodoItem } from './TodoItem'
import cl from './TodoList.module.css'

const TodoList = () => {
  const listTodo = useAppSelector((state) => state.todos.todos)

  return (
    <>
      {listTodo.length ? (
        <ul className={cl.todoList}>
          {listTodo.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      ) : (
        <p className={cl.message}>No tasks were created</p>
      )}
    </>
  )
}

export { TodoList }
