import { useState, useEffect } from 'react'
import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Component/Dashboard'
const LogingPage = () => {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedin, setisLoggedin] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(url);
      const res = await response.json();
      let foundUser = false;
      
      for (const user of res){
        if(user.username === name && user.email === email){
          foundUser = true;
          setisLoggedin(true);
          setErrorMessage('')
          navigate('/dashboard', {state:{name}});
          break;
        }
      }

      if(!foundUser){
        setErrorMessage('invalid username or password');
      }


     // const matchData = res.find((data) => data.username === name && data.email === email)
     // const matchData = res.data(
       // (res) => res.username === setName && email === setEmail // Dummy password for demo
      //);

      /*if (matchData) {
        setErrorMessage(''); 
        alert('Login Successfull')
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid credentials'); 

        alert('Login Failed')
      }
       */
      //return res;
    } catch (err) {
      console.error(err);
      setErrorMessage('An error occurred. Please try again later.'); 
    }
  }

   /*useEffect(() => {
    fetchData();
   }, [])


  */

  return (
    <div className='login'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={fetchData}>
        <input type="text" name='username' value={name} onChange={(e) => setName(e.target.value)} placeholder='username' required />
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='examle@gmail.com' required />
        <input type="submit"  value='Login'/>
      </form>

     {/*
      isLoggedin ? ( <p>Sucessfully logged in</p>
      ): errorMessage ? 
      ( <p className='error-message'>{errorMessage}!</p>):null
  */ }

    </div>
  )
}

export default LogingPage