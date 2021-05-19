import React, { useState } from 'react'
import LoginFormToggle from '../../components/login-form-toggle'

const Login = () => {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <>
      <h2>CSS Tab</h2>
      <div>
        <LoginFormToggle
          label="tab 1"
          setShowRegister={() => setShowRegister(false)}
          active={!showRegister}
        />
        <LoginFormToggle
          label="tab 2"
          setShowRegister={() => setShowRegister(true)}
          active={showRegister}
        />
        {showRegister ? <div>content 2</div> : <div>content 1</div>}
      </div>
    </>
  )
}

export default Login
