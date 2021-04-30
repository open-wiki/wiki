import Styles from './Sidebar.module.css'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Sidebar = (isOpen) => {
  const router = useRouter()
  return (
    <nav className={isOpen ? Styles.SidebarOpen : Styles.Sidebar}>
      <ul>
        <li className={router.pathname == '/' ? Styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == '/articles' ? Styles.active : ''}>
          <Link href="/articles">Articles</Link>
        </li>
        <li className={router.pathname == '/articles/create' ? Styles.active : ''}>
          <Link href="/articles/create">Create article</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Sidebar
