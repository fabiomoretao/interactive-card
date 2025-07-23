import cardBack from "../../assets/bg-card-back.png"
import styles from "./styles.module.css"
import cardLogo from "../../assets/card-logo.svg"

function CardPreview() {
    return (
        <div className={styles.cards}>
            <div className={styles.cardFront}>
                    <img src={cardLogo} height="50rem"/>
                    <p className={styles.cardFrontNumber}>0000 0000 0000 0000</p>
                    <p className={styles.name}>JANE APPLESEED</p>
                    <p className={styles.expDate}>00/00</p>
            </div>
            <div className={styles.cardBack}>
                <p>1234 5678 9123 0000</p>
            </div>
        </div>
    )
}

export default CardPreview