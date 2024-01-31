import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.projects} id="projects">
            <div className="container">
                <h3 className="subtitle">Проекти</h3>
                <h2 className={styles.title}>Останні проекти</h2>
                <div className={styles.list}>
                    <div className={styles.project}>
                        <div className={styles.info}>
                            <h2 className={styles.projectTitle}>Vosk Barbershop</h2>
                            <p className={styles.type}>Landing Page</p>
                            <p className={styles.stack}><span>Pug</span><span>SCSS</span><span>Bootstrap Grid</span><span>JavaScript</span><span>Gulp</span></p>
                        </div>
                        <div className={styles.links}>
                            <a href="https://vosk-barbershop-landing.netlify.app/" target="_blank">Demo <span>→</span></a>
                            <a href="https://github.com/nikolaytarasenko/landing-vosk-barbershop" target="_blank">GitHub <span>→</span></a>
                        </div>
                    </div>
                    <div className={`${styles.project} ${styles.projectReact}`}>
                        <div className={styles.info}>
                            <h2 className={styles.projectTitle}>Adrasteia</h2>
                            <p className={styles.type}>React Landing Page</p>
                            <p className={styles.stack}><span>React</span><span>Context API</span><span>Tailwind CSS</span></p>
                        </div>
                        <div className={styles.links}>
                            <a href="https://adrasteia-landing-react.netlify.app/" target="_blank">Demo <span>→</span></a>
                            <a href="https://github.com/nikolaytarasenko/react-adrasteia" target="_blank">GitHub <span>→</span></a>
                        </div>
                    </div>
                    <div className={`${styles.project} ${styles.projectReact}`}>
                        <div className={styles.info}>
                            <h2 className={styles.projectTitle}>G&D Consulting</h2>
                            <p className={styles.type}>React Multipage Website</p>
                            <p className={styles.stack}><span>React</span><span>React Router</span><span>Context API</span><span>CSS Modules</span></p>
                        </div>
                        <div className={styles.links}>
                            <a href="https://consulting-multipage-react.netlify.app/" target="_blank">Demo <span>→</span></a>
                            <a href="https://github.com/nikolaytarasenko/react-multipage-gd-consulting" target="_blank">GitHub <span>→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
