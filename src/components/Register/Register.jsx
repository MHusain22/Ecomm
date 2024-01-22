import React, { useState } from 'react'
import './Register.css';
import axios from 'axios';//to call api
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    email: "",
    password: "",
    reEnterPassword: "",
  }) 

  const handleChange = (e) => {
    // console.log(e.target.value);
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const registerHandler = () => {
      const {email,password,reEnterPassword} = user;
      if(email && password && (password===reEnterPassword)){
        // alert("correct");
        axios.post("http://localhost:8009/register",user)//passing the data
        .then( res => console.log(res))
        navigate("/login")
      }
      else{
        alert("invalid credentials");
      }
  }

  return (
  
        <div className='dialog'>      
      <div className='stand'>
        <h1>Register</h1>
        <input type="email" name='email' value={user.email} onChange={handleChange} placeholder='Email' />
        <input type="password" name="password" value={user.password} onChange={handleChange} id="" placeholder='Password' />
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} id="" placeholder='Re-Enter Password' />
        <button type='submit' className='logbtn' onClick={registerHandler}>Register</button>
        <a href="" style={{textDecoration:"none",color:"inherit"}}>Forget password</a>
        {/* <p>or sign in with google<span className='gog'><img src={google} width="10%" alt="" /></span></p> */}
      </div>
    </div>
  
  )
}

export default Register