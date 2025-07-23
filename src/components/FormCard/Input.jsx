import styles from "./input.module.css"

function Input (props) {
    return(
        <div className={`${styles.inputContainer} ${props.className}`}>
            <label htmlFor={props.id}>{props.label} </label>
            <input 
            type={props.type} 
            placeholder={props.placeholder}
            id={props.id}
            />
        </div>
    )
}

export default Input