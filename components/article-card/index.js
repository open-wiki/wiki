import Styles from './ArticleCard.module.css'

const ApiUrl = `http://localhost:5000`

const ArticleCard = ({ article }) => {
  return (
    <div className={Styles.ArticleCard}>
      <a href="#">
        <div
          className={Styles.Thumbnail}
          style={{
            background: `url(${
              ApiUrl + article?.Thumbnail?.formats?.thumbnail?.url
            })`,
          }}
        ></div>
      </a>
      <div className={Styles.Content}>
        <a href={'/articles/' + article.id}>
          <h1>{article.Title}</h1>
        </a>
        <p>{article.Paragraph}</p>
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
