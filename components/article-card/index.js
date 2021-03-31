import Styles from './ArticleCard.module.css'

const ArticleCard = () => {
  return (
    <div className={Styles.ArticleCard}>
      <a href="#">
        <div
          className={Styles.Thumbnail}
          style={{
            background:
              'url(https://miro.medium.com/max/1400/1*7Hch-sFvFGjO0SE4lp1luw.png)',
          }}
        ></div>
      </a>
      <div className={Styles.Content}>
        <a href="#">
          <h1>User Story Mapping (USM)</h1>
        </a>
        <p>
          artikel n my opinion this is the best solution, but not everyone can use
          JS. Basically, the jQuery will check any .text element, and if there are
          more chars than the preset max var, it will cut the rest off and add an
          ellipsis. There are no caveats to this approach, however this code example
          is meant only to demonstrate the basic idea - I wouldn&apos;t use this in
          production without improving on it for a two reasons:
        </p>
        <div className={Styles.Meta}>
          <span className={Styles.Date}>1 maand geleden</span>
          <div className={Styles.Score}>
            360 <span className={'material-icons'}>thumb_up_off_alt</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
