import React, { useState } from 'react'
import LoginFormToggle from '../../components/login-form-toggle'
import Styles from './login.module.css'
import Login_User from '../api/login_user'
import { useRouter } from 'next/router'

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
    if (authenticatedUser?.jwt) {
      document.cookie = `jwt=${authenticatedUser.jwt}; path=/;`
    }
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
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [repeatPassword, setRepeatPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        FirstName: firstName,
        LastName: lastName,
      }),
    }).then(() => router.push(`/`))
  }
  return (
    <form className={Styles.registerForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="gebruikersnaam"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="voornaam"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="achternaam"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="wachtwoord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="password" placeholder="herhaal wachtwoord" />
      <button type="submit">Registreren</button>
    </form>
  )
}

export default Login
