import Link from 'next/link'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={Styles.navbar}>
            <div className={"logo"}>
                <h1>Open Wiki</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/articles"><a>Overview</a></Link>
            <Link href="/articles/create"><a>Create</a></Link>
        </nav>
    )
}

export default Navbar;