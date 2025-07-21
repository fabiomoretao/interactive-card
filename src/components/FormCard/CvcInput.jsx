import styles from "./input.module.css"

function CvcInput() {
    return (
        <div>
            <label htmlFor="cvc" className={styles.cvcLabel}> Cvc</label>
            <input type="text" placeholder="e.g 123" className={styles.cvcInput} />
        </div>
    )
}

export default CvcInput