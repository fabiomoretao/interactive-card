import DateError from "./DateError"
import { validateDate } from "../utils/validators"
import { useState } from "react"

export default function ExpDate(props) {
    const [dateIsValid, setDateIsValid] = useState(true)

    return (
        <div className="col-[1] grid grid-cols-2 grid-rows-[2.2rem_3rem_1rem]">
            <label
                htmlFor="cardExp"
                className="col-span-2"
            >Exp. Date (mm/yy)</label>
            <input
                type="text"
                name="cardExpMonth"
                id="cardExpMonth"
                className="col-[1] mr-2 max-h-[3rem]"
                placeholder="MM"
                style={dateIsValid ? {} : { border: "2px solid red" }}
                value={props.month}
                onChange={(ev) => {
                    props.setMonth(ev.target.value)
                    setDateIsValid(validateDate(ev.target.value, "month"))
                }} />
            <input
                type="text"
                name="cardExpYear"
                id="cardExpYear"
                className="col-[2] max-h-[3rem]"
                placeholder="YY"
                style={dateIsValid ? {} : { border: "2px solid red" }}
                value={props.year}
                onChange={(ev) => {
                    props.setYear(ev.target.value)
                    setDateIsValid(validateDate(ev.target.value, "year"))
                }} />
            <DateError month={props.month} year={props.year} dateIsValid={dateIsValid} />
        </div>
    )
}