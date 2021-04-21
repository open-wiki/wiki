import Styles from './Searchbar.module.css'

const Searchbar = () => {
  return (
    <div className={Styles.searchbar}>
      <form action="/searchresults" method="get">
        <input
          className={Styles.input}
          type="text"
          placeholder="Zoeken"
          name="input"
        />
        <input type="submit" value="zoek"></input>
        <span className="material-icons md-24">search</span>
      </form>
    </div>
  )
}

export default Searchbar
