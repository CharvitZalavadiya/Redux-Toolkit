import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const updateHandler = (e) => {
        e.preventDefault
        dispatch(updateTodo(input))
    }

  return (
    <div>
      Todos
      {todos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
            <button onClick={updateHandler}>U</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </div>
  )
}

export default Todos
