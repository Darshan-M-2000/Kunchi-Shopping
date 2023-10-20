import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder="Email Address"  />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the subsrcibe to KUNCHI VIBE'S YouTue channel</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup