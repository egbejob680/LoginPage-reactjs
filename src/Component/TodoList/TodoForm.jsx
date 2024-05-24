import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

   const hanleSubmit = e => {
     e.preventDefault();
     addTodo(value)
     setValue("")
   }
  return (
    <form className='py-10 flex justify-between mx-14' onSubmit={hanleSubmit}>
      <input type="text" value={value} className='w-2/4 h-10 outline-none border-b-2  text-lg px-5 gap-4 placeholder:text-gray-500' 
      placeholder='what is the task today' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='bg-green-500 w-48 h-12 border-lg text-white font-bold rounded-sm '>Add Task</button>
    </form>
  )
}
