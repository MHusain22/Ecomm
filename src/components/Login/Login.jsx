import React, { useState } from 'react'
import './Login.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Login = ({setUserLogin}) => {

  const navigate = useNavigate()

  const [user,setUser] = useState({
    email: "",
    password: "",
  }) 

  const handleChange = (e) => {
    // console.log(e.target.value);
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    });
  }

  const loginHandler = () => {
    axios.post("http://localhost:8009/login", user)
    .then(res => {
      console.log(user);
      console.log(res);
      setUserLogin(res.data.user);
      navigate("/");
    });
  }

  const moveTo = () => {
    navigate("/register");
  }

  return (
    <div className='dialog'>      
      <div className='stand'>
        <h1>Login</h1>
        <input type="email" name='email' value={user.email} onChange={handleChange} placeholder='Email' required/>
        <input type="password" name='password' value={user.password} onChange={handleChange} id="" required placeholder='Password' />
        <button type='submit' className='logbtn' onClick={loginHandler}>Login</button>
        {/* <Link to="/register"> */}
        <button type='submit' className='logbtn' onClick={moveTo}>Register</button>
        {/* </Link> */}
        <a href="" style={{textDecoration:"none",color:"inherit"}}>Forget password</a>
        {/* <p>or sign in with google<span className='gog'><img src={google} width="10%" alt="" /></span></p> */}
        <p>Does not have an account then</p>
        
      </div>
    </div>
    
  )
}

export default Login;