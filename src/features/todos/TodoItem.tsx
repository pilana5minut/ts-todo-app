import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { Todo } from '../../types/todos'
import cl from './TodoItem.module.css'
import { completedTodo } from './todosSlice'

interface TodoItemProps extends Todo {}

const TodoItem: FC<TodoItemProps> = ({ id, completed, priority, content }) => {
  const dispatch = useAppDispatch()
  const [checkboxValue, setCheckboxValue] = useState(completed)
  const [selectedValue, setSelectedValue] = useState<Todo['priority']>(priority)

  const handleCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(event.target.checked)
    dispatch(completedTodo(id))
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value as Todo['priority'])
  }

  return (
    <li className={cl.todoItem}>
      <div className={cl.todoItemActions}>
        <input type="checkbox" onChange={handleCompleted} checked={checkboxValue} />
        <div className={cl.todoItemSelect}>
          <label htmlFor="priority">Priority</label>
          <select id="priority" value={selectedValue} onChange={handleChange}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="button">&times;</button>
      </div>
      <div>
        <span>{content}</span>
      </div>
    </li>
  )
}

export { TodoItem }
