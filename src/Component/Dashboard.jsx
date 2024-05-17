import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import './Dashboard'

const Dashboard = () => { 
  const {name} = useLocation().state ||{};
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2 className='welcome' >welcome back, {name}</h2>
    </div>
  )
}

export default Dashboard