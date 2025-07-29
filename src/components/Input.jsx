export default function Input(props) {
    return (
        <div className="flex max-w-screen flex-col">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {props.children}
        </div>
    )
}