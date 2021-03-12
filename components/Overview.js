import Styles from '../styles/Overview.module.css'

const Overview = () => {
    return (
        <container>
            <h1>Overzicht</h1>
            <article className={Styles.overview}>
                <article className={Styles.article}>
                    <div className={Styles.image}></div>
                    <div className={Styles.content}>
                        <p className={Styles.category}>Product Owner</p>
                        <h2>User Story Mapping (USM)</h2>
                        <p>Een User Story Map (USM) is een grafische weergave van de roadmap van alle user stories in de tijd en naar prioriteit.</p>
                    </div>
                </article>
                <article className={Styles.article}>
                    <div className={Styles.image}></div>
                    <div className={Styles.content}>
                        <p className={Styles.category}>Product Owner</p>
                        <h2>User Story Mapping (USM)</h2>
                        <p>Een User Story Map (USM) is een grafische weergave van de roadmap van alle user stories in de tijd en naar prioriteit.</p>
                    </div>
                </article>
                <article className={Styles.article}>
                    <div className={Styles.image}></div>
                    <div className={Styles.content}>
                        <p className={Styles.category}>Product Owner</p>
                        <h2>User Story Mapping (USM)</h2>
                        <p>Een User Story Map (USM) is een grafische weergave van de roadmap van alle user stories in de tijd en naar prioriteit.</p>
                    </div>
                </article>
            </article>
        </container>
    )
}

export default Overview