import { FC, useState } from 'react'
import cl from './TodoItem.module.css'
import { Todo } from '../../types/todos'

interface TodoItemProps extends Todo {}

const TodoItem: FC<TodoItemProps> = ({ id, completed, priority, content }) => {
  const [selectedValue, setSelectedValue] = useState({ priority })

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <li className={cl.todoItem}>
      <div className={cl.todoItemActions}>
        <input type="checkbox" />
        <div className={cl.todoItemSelect}>
          <label htmlFor="priority">Priority</label>
          <select id="priority" value={selectedValue} onChange={handleChange}>
            <option value="important">Important</option>
            <option value="medium-important">Medium important</option>
            <option value="not-important">Not important</option>
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
