import Styles from './Navbar.module.css'
import React, { useState } from 'react'
import ActiveLink from '../activelink/Activelink'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  function toggle() {
    setOpen(!open)
  }

  return (
    <>
      <div className={Styles.hamburgerOpen} onClick={toggle}>
        <i className="material-icons">menu</i>
      </div>
      <nav className={open ? Styles.navbar : Styles.closednavbar}>
        <div className={Styles.logo}>
          <Image
            src={'/logo-w.png'}
            alt={'open wiki logo'}
            width={175}
            height={50}
            priority
          />
        </div>
        <div className={Styles.hamburgerClosed} onClick={toggle}>
          <i className="material-icons">close</i>
        </div>
        <div className={Styles.menu}>
          <ActiveLink activeClassName={Styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={Styles.active} href="/articles">
            <a>Overview</a>
          </ActiveLink>
          <ActiveLink activeClassName={Styles.active} href="/articles/create">
            <a>Create</a>
          </ActiveLink>
        </div>
      </nav>
    </>
  )
}
