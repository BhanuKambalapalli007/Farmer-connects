//import { useState } from 'react'
//import { useSignup } from '../hooks/useSignup'

// styles
import './Signup.css'

export default function Signup() {

  return (
    <form className="auth-form">
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          required 
          type="email" 
          
          
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password" 
          
        />
      </label>
      <label>
        <span>name:</span>
        <input
          required
          type="text" 
         
        />
      </label>
      <label>
        <span>Photo:</span>
        <input 
          required
          type="file"
        />
        </label>
    </form>
  )
}
