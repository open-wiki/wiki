import Styles from './Searchbar.module.css'

const Searchbar = () => {
  return (
    <div className={Styles.searchbar}>
      <input className={Styles.input} type="text" placeholder="Zoeken" name="s" />
      <span className="material-icons md-24">search</span>
    </div>
  )
}

export default Searchbar
