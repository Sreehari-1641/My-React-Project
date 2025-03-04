import React, { use, useState } from 'react'
import './CSS/LoginSignup.css'
import { registration } from '../server/AllAPI'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
  const [user,setUser]= useState({
    name:"",
    email:"",
    password :"",
  })
  const navigate = useNavigate()
  const onRegister =async()=>{
    if(user.name&&user.email&&user.password){
      try {
        await registration(user)
        navigate("/")
        
      } catch (error) {
        console.log(error);
        
        
      }
    }else{
      alert("Please enter all the field")
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input onChange={(e)=>setUser({...user,name:e.target.value})} type="text" placeholder='Your Name' />
          <input onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder='Email Address' />
          <input onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder='Password' />
        </div>
        <button onClick={onRegister}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup