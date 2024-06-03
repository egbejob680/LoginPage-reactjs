import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from '../TodoList/TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: true,
        isEditing: false,
      },
    ]);
  };

   const toggleComplete = id => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    // Implement logic to set the todo with the given id to be in editing mode (isEditing: true)
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  };

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id ===id ?{...todo, task, isEditing: !todo.isEditing}: todo))
  }

  return (
    <div className='todo-wrapper w-1/2 display overflow-hidden inline-block items-center my-8 mx-[500px] bg-white h-[50%] min-h-52 rounded-lg'>
      <h1 className='todo-title'>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      
          {todos.map((todo,index) => (
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo}/>
            ) : (
              <Todo
              key={index}
              task={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit} // Pass handleEdit function to Todo component for editing functionality
            />
            )
           
          ))}
       
    </div>
  );
};
