import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.logo}>tarasenko</a>
            <ul className={styles.menu}>
                <li>
                    <a href="#">Головна</a>
                </li>
                <li>
                    <a href="#">Про мене</a>
                </li>
                <li>
                    <a href="#">Проекти</a>
                </li>
                <li>
                    <a href="#">Контакти</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
