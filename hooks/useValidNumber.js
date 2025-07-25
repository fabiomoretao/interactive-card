import { useState } from "react"

function useValidNumber(number) {
    const [validNumber, setValidNumber] = useState(false)
    const validate = /\D/g


    const handleSetValidNumber = (number) => {
        if (number.match(validate)) {
            setValidNumber(true)
            console.log("positivo")
        } else {
            setValidNumber(false)
        }
    }

    return { validNumber, handleSetValidNumber }
}

export default useValidNumber