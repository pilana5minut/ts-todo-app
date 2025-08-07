import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { Todo } from '../../types/todos'
import cl from './TodoItem.module.css'
import { completedTodo, priorityChange, removeTodo } from './todosSlice'
import cn from 'classnames'

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
    const newPriority = event.target.value as Todo['priority']
    setSelectedValue(newPriority)
    dispatch(priorityChange({ id, selectedValue: newPriority }))
  }

  const handleRemove = () => {
    dispatch(removeTodo(id))
  }

  return (
    <li className={cn(cl.todoItem, { [cl.completed]: completed })}>
      <div className={cl.todoItemActions}>
        <input type="checkbox" onChange={handleCompleted} checked={checkboxValue} />
        <div className={cl.todoItemSelect}>
          <label className={cl.todoItemLabel} htmlFor="priority">
            Priority
          </label>
          <select
            className={cn(
              cl.todoItemLabel,
              { [cl.selectColorHigh]: priority === 'high' },
              { [cl.selectColorMedium]: priority === 'medium' },
              { [cl.selectColorLow]: priority === 'low' }
            )}
            disabled={completed}
            id="priority"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="button" onClick={handleRemove}>
          &times;
        </button>
      </div>
      <div>
        <span>{content}</span>
      </div>
    </li>
  )
}

export { TodoItem }
