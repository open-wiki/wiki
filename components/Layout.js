import styles from './Layout.module.css'
import Topbar from './topbar/Topbar'
import Head from 'next/head'
import HomeTopbar from './homeTopbar/HomeTopbar'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="content">
        {router.pathname === '/' ? <HomeTopbar /> : <Topbar />}
        <div className={styles.container}>{children}</div>
      </div>
    </>
  )
}

export default Layout
