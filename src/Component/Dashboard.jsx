import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

const Dashboard = () => { 
  const {username} = useLocation().state ||{};
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2 className='welcome' >welcome back, {username}</h2>
    </div>
  )
}

export default Dashboard