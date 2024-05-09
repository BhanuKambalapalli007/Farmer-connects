//import { useState } from 'react'
//import { useLogin } from '../../hooks/useLogin'

// styles
import './Login.css'

export default function Login() {
  return (
    <form  className="auth-form">
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="Email" 
          
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          required
          type="Password" 
        />
      </label>
    </form>
  )
}
