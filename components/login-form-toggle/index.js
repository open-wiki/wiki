import React from 'react'
import Styles from './login-form-toggle.module.css'

export default function LoginFormToggle({ setShowRegister, label, active }) {
  return (
    <button
      onClick={setShowRegister}
      className={`${Styles.toggle} ${active ? Styles.active : ''}`}
    >
      {label}
    </button>
  )
}
