import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='register'>
    <span className='registerTitle'>
    Register
    </span>
        <form className='registerForm'>
            <label>Username</label>
            <input type='text' className='registerInput' placeholder='Enter your userName'/>
            <label>Email</label>
            <input type='text' className='registerInput' placeholder='Enter your email'/>
            <label>password</label>
            <input type='password' className='registerInput' placeholder='Enter your Password'/>
            <button className='registerButton'>Register</button>
            <button className='registerLoginButton'>
            <Link className='link' to="/login" >Login</Link>

            </button>
        </form>
    </div>
  )
}
