import styles from './About.module.css'
import aboutImg from '../../assets/about.jpg'

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.imgWrapper}>
                        <img src={aboutImg} alt="about" />
                    </div>
                    <div className={styles.content}>
                        <h3 className="subtitle">Про мене</h3>
                        <h2 className={styles.title}>Front-end розробник</h2>
                        <p className={styles.text}>Мене звати Коля, я з Києва, і я займаюсь розробкою UI.</p>
                        <p className={styles.text}>Для повсякденних завдань найчастіше використовую Pug, Sass, Bootstrap, TailwindCSS, JavaScript, Gulp. Також напишу все з нуля, не використовуючи сторонні бібліотеки чи фреймворки. Можу перетворити дизайнерський макет в готову тему WordPress.</p>
                        <p className={styles.text}>На даний момент активно вивчаю бібліотеку React.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
