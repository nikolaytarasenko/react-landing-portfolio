import styles from './Projects.module.css'
import { projects } from '../../utils/constants'

const Projects = () => {
    return (
        <div className={styles.projects} id="projects">
            <div className="container">
                <h3 className="subtitle">Проекти</h3>
                <h2 className={styles.title}>Приклади проектів</h2>
                <div className={styles.list}>
                    {projects.map(project => {
                        const projectClass = `project${project.type}`

                        return (
                            <div key={project.id} className={`${styles.project} ${styles[projectClass]}`}>
                                <div className={styles.info}>
                                        <a href={project.links[0].url} target="_blank">
                                            <h2 className={styles.projectTitle}>{project.title}</h2>
                                        </a>
                                    <p className={styles.description}>{project.description}</p>
                                    <p className={styles.stack}>
                                        {project.stack.map((el, i) => (
                                            <span key={i}>{el}</span>
                                        ))}
                                    </p>
                                </div>
                                <div className={styles.links}>
                                    {project.links.map(link => (
                                        <a key={link.id} href={link.url} target="_blank">{link.title} <span>→</span></a>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
