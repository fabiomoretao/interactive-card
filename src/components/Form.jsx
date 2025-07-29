import { useState } from "react"
import { validateCardNumber } from "../utils/validators"
import Input from "./Input"
import ExpDate from "./ExpDate"
import Cvc from "./Cvc"

export default function Form(props) {
    const [cardNumberIsValid, setCardNumberIsValid] = useState(true)

    return (
        <form>
            {/* Titular do cartão */}
            <Input
                label={"Cardholder"}
                type={"text"}
                name={"cardholderName"}
                id={"cardholderName"}
                placeholder={"e.g. Jane Appleseed"}
                value={props.cardholder}
                onChange={(ev) => props.setCardholder(ev.target.value)}
            />
            {/* Numero do cartão */}
            <Input
                label={"Card Number"}
                type={"text"}
                name={"cardNumber"}
                id={"cardNumber"}
                placeholder={"e.g. 1234 5678 9123 0000"}
                style={cardNumberIsValid ? {} : { border: "2px solid red" }}
                value={props.cardNumber}
                onChange={(ev) => {
                    props.setCardNumber(ev.target.value);
                    setCardNumberIsValid(validateCardNumber(ev.target.value))
                }}>
                <>
                    {!cardNumberIsValid && props.cardNumber !== '' ? (
                        <>
                            {/^\d+$/.test(props.cardNumber) || props.cardNumber === '' ? (
                                <span className="text-red-600 text-sm">Wrong format, must have 16 numbers</span>
                            ) : (
                                <span className="text-red-600 text-sm">Wrong format, numbers only</span>
                            )}
                        </>
                    ) : null}
                </>
            </Input>

            {/* inputs pequenos */}
            <div className="grid grid-cols-2 gap-4">
                <ExpDate
                    month={props.month}
                    setMonth={props.setMonth}
                    year={props.year}
                    setYear={props.setYear}
                />
                <Cvc
                    cvc={props.cvc}
                    setCvc={props.setCvc}
                />
            </div>
        </form>
    )
}