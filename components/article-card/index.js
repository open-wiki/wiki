import Styles from './ArticleCard.module.css'
import { useState } from 'react'

const ApiUrl = `http://localhost:5000`

const ArticleCard = ({ article }) => {
  const [like, setLike] = useState(false)
  const onLike = () => {
    setLike(!like)
  }
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
          <span className={Styles.Date}>{article.published_at.slice(0, 10)}</span>
          <div className={Styles.Score}>
            {article.Upvotes}{' '}
            <button
              className={`${Styles.likeButton} ${like && Styles.likedButton}`}
              onClick={onLike}
            >
              {' '}
              <span className={'material-icons'}>thumb_up_off_alt</span>{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
