import { useState } from "react"
import { validateCvc } from "../utils/validators"

export default function Cvc(props) {
    const [cvcIsValid, setCvcIsValid] = useState(true)

    return (
        <div className="col-[2] flex flex-col">
            <label htmlFor="cardCvc">CVC</label>
            <input
                type="text"
                name="cardCvc"
                id="cardCvc"
                className="max-w-full max-h-[3rem]"
                placeholder="e.g. 123"
                value={props.cvc}
                style={cvcIsValid ? {} : { border: "2px solid red" }}
                onChange={(ev) => {
                    props.setCvc(ev.target.value)
                    setCvcIsValid(validateCvc(ev.target.value))
                }}
            />
            {!cvcIsValid && props.cvc !== '' ? (
                <>
                    {/^\d+$/.test(props.cvc) || props.cvc === '' ? (
                        <span className="text-red-600 text-sm">Must have 3 numbers</span>
                    ) : (
                        <span className="text-red-600 text-sm">Numbers only</span>
                    )}
                </>
            ) : null}
        </div>
    )
}