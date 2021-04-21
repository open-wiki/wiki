import Styles from './Searchbar.module.css'

const Searchbar = () => {
  return (
    <div className={Styles.searchbar}>
      <input className={Styles.input} type="text" placeholder="Zoeken" name="s" />
      <button className={Styles.searchButton}>
        <span className={`material-icons md-24 ${Styles.searchIcon}`}>search</span>
      </button>
    </div>
  )
}

export default Searchbar
