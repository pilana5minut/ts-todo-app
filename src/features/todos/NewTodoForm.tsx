import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { Todo } from '../../types/todos'
import { addTodo } from './todosSlice'
import cl from './NewTodoForm.module.css'

interface NewTodoFormProps {}

const NewTodoForm: FC<NewTodoFormProps> = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useAppDispatch()

  const handleCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputText.trim().length === 0) {
      return
    }
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      completed: false,
      priority: 'low',
      content: inputText,
    }
    dispatch(addTodo(newTodo))
    setInputText('')
  }

  return (
    <form className={cl.newTodoForm} onSubmit={handleCreateTodo}>
      <input
        type="text"
        value={inputText}
        placeholder="Enter text..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export { NewTodoForm }
