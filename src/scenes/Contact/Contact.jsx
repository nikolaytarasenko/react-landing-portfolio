import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact} id="contact">
            <div className="container">
                <h3 className="subtitle">Контакти</h3>
                <h2 className={styles.title}>Зв'язатись зі мною:</h2>
                <div className={styles.contacts}>
                    <div className={styles.item}>
                        <h4>Телефон:</h4>
                        <p>063 792 59 05</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Telegram:</h4>
                        <p>@kolyatarasenko</p>
                    </div>
                    <div className={styles.item}>
                        <h4>E-mail:</h4>
                        <p>kolyatarasenko@ukr.net</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
