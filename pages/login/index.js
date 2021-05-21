import React, { useState } from 'react'
import LoginFormToggle from '../../components/login-form-toggle'
import Styles from './login.module.css'

const Login = () => {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      <h2>Login/Register</h2>
      <div>
        <LoginFormToggle
          label="login"
          setShowRegister={() => setShowRegister(false)}
          active={!showRegister}
        />
        <LoginFormToggle
          label="register"
          setShowRegister={() => setShowRegister(true)}
          active={showRegister}
        />
        {showRegister ? <RegisterForm /> : <LoginForm />}
      </div>
    </>
  )
}
const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(loginEmail)
  }
  return (
    <form className={Styles.loginForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="voornaam.achternaam@student.hu.nl"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input type="password" placeholder="wachtwoord" />
      <input type="submit" />
    </form>
  )
}
const RegisterForm = () => {
  return (
    <form className={Styles.registerForm}>
      <input type="text" placeholder="voornaam" />
      <input type="text" placeholder="achternaam" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="wachtwoord" />
      <input type="password" placeholder="herhaal wachtwoord" />
    </form>
  )
}

export default Login
