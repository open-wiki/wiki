import Head from 'next/head'
import Overview from '../components/Overview'
import Styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={Styles.container}>
        <Overview>
        </Overview>
    </div>
  )
}
