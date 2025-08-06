import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { Todo } from '../../types/todos'
import { addTodo } from './todosSlice'

interface NewTodoFormProps {}

const NewTodoForm: FC<NewTodoFormProps> = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useAppDispatch()

  const handleCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo: Todo = {
      id: Date.now(),
      completed: false,
      priority: 'important',
      content: inputText,
    }
    dispatch(addTodo(newTodo))
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export { NewTodoForm }
