import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { TodoWrapper } from './TodoList/TodoWrapper';

const Dashboard = () => { 
  const {username} = useLocation().state ||{};
  return (
    <div className='bg-purple-500 h-screen'>
      <h1 className='text-white font-bold'>Dashboard</h1>
      <hr />
      <h2 className='text-white font-medium' >welcome back, {username}</h2>
      <TodoWrapper/>
    </div>
  )
}
export default Dashboard