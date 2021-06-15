import React, { useState } from 'react'
import Cookies from 'cookies'
import LoginFormToggle from '../../components/login-form-toggle'
import Styles from './login.module.css'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Login = () => {
  const [showRegister, setShowRegister] = useState(false)

  const LoginForm = () => {
    const [loginIdentifier, setLoginIdentifier] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const router = useRouter()

    const handleSubmit = async (event) => {
      event.preventDefault()
      fetch(`/api/login_user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          identifier: loginIdentifier,
          password: loginPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.jwt) {
            document.cookie = `jwt=${data.jwt}; path=/;`
            router.push('/')
          }
          if (data.statusCode) {
            toast.error(
              `Error ${data.statusCode}: ${data.data[0].messages[0].message}`
            )
          }
        })
    }

    return (
      <form className={Styles.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="loginIdentifier">HU-email / gebruikersnaam</label>
        <input
          type="text"
          id="loginIdentifier"
          placeholder="voornaam.achternaam@student.hu.nl"
          value={loginIdentifier}
          onChange={(e) => setLoginIdentifier(e.target.value)}
        />
        <label htmlFor="password">Wachtwoord</label>
        <input
          type="password"
          id="password"
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
    const [registrationError, setRegistrationError] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [repeatPassword, setRepeatPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (event) => {
      event.preventDefault()
      setEmailError(false)
      setPasswordError(false)
      if (!email.endsWith('hu.nl')) {
        const message = 'Alleen email-adressen van de HU zijn toegestaan'
        toast.error(`Error: ${message}`)
        setEmailError(true)
        return setRegistrationError(message)
      }
      if (password !== repeatPassword) {
        const message = 'Wachtwoorden komen niet overeen'
        toast.error(`Error: ${message}`)
        setPasswordError(true)
        return setRegistrationError(message)
      }
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
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.jwt) {
            document.cookie = `jwt=${data.jwt}; path=/;`
            router.push('/')
          }
          if (data.statusCode) {
            setRegistrationError(data.data[0].messages[0].message)
            toast.error(
              `Error ${data.statusCode}: ${data.data[0].messages[0].message}`
            )
          }
        })
    }
    return (
      <form className={Styles.registerForm} onSubmit={handleSubmit}>
        {registrationError && (
          <span className={Styles.error}>{registrationError}</span>
        )}
        <label htmlFor="username">Gebruikersnaam</label>
        <input
          type="text"
          id="username"
          placeholder="gebruikersnaam"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="firstName">Voornaam</label>
        <input
          type="text"
          id="firstName"
          placeholder="voornaam"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Achternaam</label>
        <input
          type="text"
          id="lastName"
          placeholder="achternaam"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">HU-email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          className={emailError && Styles.inputError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Wachtwoord</label>
        <input
          type="password"
          id="password"
          placeholder="wachtwoord"
          value={password}
          className={passwordError && Styles.inputError}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="repeatPassword">Herhaal wachtwoord</label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="herhaal wachtwoord"
          value={repeatPassword}
          className={passwordError && Styles.inputError}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button type="submit">Registreren</button>
      </form>
    )
  }

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

export default Login

export const getServerSideProps = (ctx) => {
  let jwt = false
  if (ctx.req) {
    const cookies = new Cookies(ctx.req, ctx.res)
    jwt = cookies.get('jwt')
    if (jwt) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  }
  return {
    props: {},
  }
}
