import Styles from './IconButton.module.css'

const IconButton = ({ content }) => {
  return (
    <button className={Styles.Button}>
      <i className="material-icons md-24">add_circle</i>
      <span className={Styles.Content}>{content}</span>
    </button>
  )
}

export default IconButton
