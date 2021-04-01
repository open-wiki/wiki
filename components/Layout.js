import styles from './Layout.module.css'
import Topbar from './topbar/Topbar'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="content">
        <Topbar />
        <div className={styles.container}>{children}</div>
      </div>
    </>
  )
}

export default Layout
