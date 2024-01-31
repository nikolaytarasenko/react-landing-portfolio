import styles from './Navbar.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <AnchorLink href="#hero" className={styles.logo}>tarasenko</AnchorLink>
            <ul className={styles.menu}>
                <li>
                    <AnchorLink href="#hero">Головна</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#projects">Проекти</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#about">Про мене</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#contact">Контакти</AnchorLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
