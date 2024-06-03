import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './todo.css'; // Import your CSS file for styling

export const Todo = ({ task, toggleComplete, handleEdit, handleDelete }) => {
  return (
    <div className='todo'>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ""}`}
      >
        {task.task}
      </p>
      <div className='icon'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(task.id)} /> {/* Edit button */}
        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} /> {/* Delete button */}
      </div>
    </div>
  );
};
 