import React, { useState } from 'react'
import LoginFormToggle from '../../components/login-form-toggle'
import Styles from './login.module.css'
import Login_User from '../api/login_user'

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
  const [loginIdentifier, setLoginIdentifier] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const authenticatedUser = await Login_User(loginIdentifier, loginPassword)
    console.log(authenticatedUser)
  }
  return (
    <form className={Styles.loginForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="voornaam.achternaam@student.hu.nl"
        value={loginIdentifier}
        onChange={(e) => setLoginIdentifier(e.target.value)}
      />
      <input
        type="password"
        placeholder="wachtwoord"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button type="submit">Login</button>
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
