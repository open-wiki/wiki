import Styles from './Searchbar.module.css'
import Find_Article from '../../pages/api/search'

const Searchbar = () => {
  return (
    <div className={Styles.searchbar}>
      <form onSubmit={Find_Article}>
        <input className={Styles.input} type="text" placeholder="Zoeken" name="s" />
        <input type="submit" value="zoek"></input>
        <span className="material-icons md-24">search</span>
      </form>
    </div>
  )
}

export default Searchbar
