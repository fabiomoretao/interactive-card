import styles from "./input.module.css"

function Input (props) {
    return(
        <div className={`${styles.inputContainer} ${props.className}`}>
            <label htmlFor={props.for}>{props.label} </label>
            <input 
            type={props.type} 
            placeholder={props.placeholder}/>
        </div>
    )
}

export default Input