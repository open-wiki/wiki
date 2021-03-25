import styles from './Layout.module.css'
import Navbar from './navbar/Navbar'
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
        <Navbar />
        <div className={styles.container}>{children}</div>
      </div>
    </>
  )
}

export default Layout
