import cardFront from "../../assets/bg-card-front.png"
import cardBack from "../../assets/bg-card-back.png"
import styles from "./styles.module.css"

function CardPreview() {
    return (
        <div className={styles.cards}>
            <img
                className={styles.cardFront}
                src={cardFront}
                alt="Front Card B)"
                width={400}
            />

            <img
                className={styles.cardBack}
                src={cardBack}
                alt="Back Card :p"
                width={400}
            />
        </div>
    )
}

export default CardPreview