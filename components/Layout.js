import styles from '../styles/Layout.module.css'
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
                <div className={styles.container}>
                    {children}
                </div>
        </div>
    )
 }

 export default Layout