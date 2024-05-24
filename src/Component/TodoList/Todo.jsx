import React from 'react'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './todo.css'

export const Todo = ({task}) => {
  return (
    <div className='todo'>
      <p>{task.task}</p>
      <div className='icon'>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} className='fapensquare'/>
        </div>
        <div>
         <FontAwesomeIcon icon={faTrash}/> 
        </div>
      </div>
    </div>
  )
}
 