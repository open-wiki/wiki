import Styles from './IconButton.module.css'

const IconButton = ({ icon, content }) => {
  return (
    <button className={Styles.Button}>
      <i className="material-icons md-24">{icon}</i>
      <span className={Styles.Content}>{content}</span>
    </button>
  )
}

export default IconButton
