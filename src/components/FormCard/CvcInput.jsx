import styles from "./input.module.css"

function CvcInput() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label
                htmlFor="cvc"
                className={styles.cvcLabel}
            >Cvc
            </label>
            <input
                type="text"
                placeholder="e.g 123"
                className={styles.cvcInput}
                id="cvc"
            />
        </div>
    )
}

export default CvcInput