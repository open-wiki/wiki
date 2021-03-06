import Styles from './Searchbar.module.css'

const Searchbar = ({ height }) => {
  return (
    <div className={Styles.searchbar}>
      <form
        action="/searchresults"
        method="get"
        className={Styles.searchForm}
        style={{ height: height }}
      >
        <input
          className={Styles.input}
          type="text"
          placeholder="Zoeken"
          name="input"
        />
        <button className={Styles.searchButton} type="submit" value="zoek">
          <span className={`material-icons md-24 ${Styles.searchIcon}`}>search</span>
        </button>
      </form>
    </div>
  )
}

export default Searchbar
