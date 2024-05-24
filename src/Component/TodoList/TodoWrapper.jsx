import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import './todo.css'
uuidv4();
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
      setTodos([...todos, {id: uuidv4(), task:todo, completed: false, isEditing: false}])
      console.log(todos)
    }
    
  return (
    <div className='w-1/2 display inline-block items-center my-8 mx-[500px] bg-[white] h-[50%] min-h-52
     rounded-lg'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo}/>
        <div className='todo-list'>
        {todos.length > 0 && ( // Conditional rendering for clarity
        <>
          {/* Map through todos and render Todo components */}
          {todos.map((todo, index) => (
            <Todo key={todo.id} task={todo} />
          ))}
        </>
      )}
        </div>
       
    </div>
  )
}