import Link from 'next/link'
import Styles from './Overview.module.css'

const Index = () => {
  return (
    <container>
      <Link href="/articles/test">
        <article className={Styles.article}>
          <div className={Styles.image}></div>
          <div className={Styles.content}>
            <p className={Styles.category}>Product Owner</p>
            <h2>User Story Mapping (USM)</h2>
            <p>
              Een User Story Map (USM) is een grafische weergave van de roadmap van
              alle user stories in de tijd en naar prioriteit.
            </p>
          </div>
        </article>
      </Link>
    </container>
  )
}

export default Index
/*    <container>
      {articles.map(article => (
          <article className={Styles.article} key={article.id}>
            <div className={Styles.image}></div>
            <div className={Styles.content}>
              <p className={Styles.category}>Product Owner</p>
              <h2>{ article.title }</h2>
              <p>
                { article.body }
              </p>
            </div>
          </article>
      ))}
    </container>*/
