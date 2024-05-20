import { NavLink } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [fullname,setFullName] = useState("");
  const navigate = useNavigate();

  const user = {
    username,
    password,
    email,
    fullname
  };
  const userData = JSON.stringify(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... your form validation logic
    localStorage.setItem("currentUser", userData);
    setUsername("");
    setPassword("");
    setEmail("");
    setFullName("");
    navigate("/dashboard");
  };

  useEffect(() => {
    const  userData = JSON.stringify(user);
    localStorage.getItem("currentUser");
    /*if (userData) {
      // User is already logged in, redirect to dashboard
    }*/
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <div className='w-1/2 border-2 border-black/30 py-12 px-3 rounded-lg'>
          <h1 className='text-5xl font-semibold tracking-wide'>Sign Up</h1>
          <form className='flex flex-col items-center gap-3' onSubmit={handleSubmit}>
            <input 
              type="text"
              name="FullName"
              value={fullname} onChange={(e) => setFullName(e.target.value)}
              className='w-1/2 h-10 outline-none border-b-2 border-slate-600 text-lg px-2 placeholder:text-gray-500'
              id=""
              placeholder='full name'
              required />
            <input type="text" name="username" 
              value={username} onChange={(e) => setUsername(e.target.value)}
             className='w-1/2 h-10 outline-none border-b-2 border-slate-600 text-lg px-2 placeholder:text-gray-500' id="" placeholder='username' required />
            <input type="email" name="email" 
              value={email} onChange={(e) => setEmail(e.target.value)}

          className='w-1/2 h-10 outline-none border-b-2 border-slate-600 text-lg px-2 placeholder:text-gray-500' id="" placeholder='email' required />
            <input type="password" name="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
             className='w-1/2 h-10 outline-none border-b-2 border-slate-600 text-lg px-2 placeholder:text-gray-500' id="" placeholder='password' required />
            <input
              type="submit"
              className='w-48 h-12 border bg-green-500 text-white shadow-md text-xl font-medium tracking-wider rounded-xl mt-6 hover:bg-green-300 transition-all duration-300'
            />
            <hr />
            <p className='text-xl tracking-wider font-medium'>Already have an Account? <span className="text-blue-600 underline"><NavLink target='./signin'/>Sign in</span></p>

          </form>
        </div>
    
    </div>
  )
}

export default SignUp;

