import styles from "./input.module.css"
function ExpInput() {
    return (
        <div className={styles.expDate}>
            <label htmlFor="expiration">Exp.Date(MM/YY)</label>
            <div className={styles.expInputs}>
                <input type="text" placeholder="MM" className={styles.mounth} id="expiration" />
                <input type="text" placeholder="YY" className={styles.year} id="expiration"/>
            </div>
        </div>
    )
}

export default ExpInput