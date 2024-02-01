import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        isMenuOpen ?
            document.body.classList.add('overflow-hidden') :
            document.body.classList.remove('overflow-hidden')
    }, [isMenuOpen])

    useEffect(() => {
        function resizeHandler() {
            if (window.matchMedia('(min-width: 768px)').matches) {
                document.body.classList.remove('overflow-hidden')
                closeMenu()
            }
        }

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    function handleMenuClick() {
        setIsMenuOpen(prev => !prev)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <nav className={styles.nav}>
            <AnchorLink href="#hero" className={styles.logo}>tarasenko</AnchorLink>
            <div className={styles.burger} onClick={handleMenuClick}>
                {isMenuOpen ? (
                    <IoClose size={35} color="#2f2f2f" />
                ) : (
                    <IoMenu size={35} color="#2f2f2f" />
                )}
            </div>
            <ul className={`${styles.menu} ${isMenuOpen ? styles['open'] : ''}`}>
                <li>
                    <AnchorLink href="#hero" offset="40" onClick={closeMenu}>Головна</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#projects" offset="40" onClick={closeMenu}>Проекти</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#about" offset="40" onClick={closeMenu}>Про мене</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#contact" offset="40" onClick={closeMenu}>Контакти</AnchorLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
