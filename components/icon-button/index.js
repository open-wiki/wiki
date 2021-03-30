import Styles from './IconButton.module.css'
import Link from 'next/link'

const IconButton = ({ icon, content, href }) => {
  return (
    <Link href={href}>
      <button className={Styles.Button}>
        <i className="material-icons md-24">{icon}</i>
        <span className={Styles.Content}>{content}</span>
      </button>
    </Link>
  )
}

export default IconButton
