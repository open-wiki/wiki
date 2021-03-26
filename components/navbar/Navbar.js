import Link from 'next/link'
import Styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={'logo'}>
        <h2>Open Wiki</h2>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/articles">
        <a>Overview</a>
      </Link>
      <Link href="/articles/create">
        <a>Create</a>
      </Link>
    </nav>
  )
}

export default Navbar
