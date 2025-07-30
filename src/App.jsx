import bgImg from "./assets/bg-main-mobile.png"
import Cards from "./components/Cards"
import iconComplete from "./assets/icon-complete.svg"
import Form from "./components/Form"
import "./styles/app.css"
import { useState } from "react"

export default function App() {
  const [cardholder, setCardholder] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvc, setCvc] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  function handleCompleted() {
    setIsCompleted(prev => !prev)
  }

  return (
    <div className="flex flex-col max-h-screen h-screen 
    laptop:grid laptop:grid-cols-[minmax(0,40%)_1fr]">
      <div className="relative
      laptop:col-start-1 laptop:flex laptop:flex-row laptop:max-h-screen">
        <img
          src={bgImg}
          className="z-0 max-h-[20rem] min-w-full
          laptop:h-full laptop:max-h-none laptop:object-cover"
        />

        <Cards
          cardholder={cardholder}
          cardNumber={cardNumber}
          cvc={cvc}
          month={month}
          year={year}
        />
      </div>
      <div className="laptop:col-start-2 laptop:flex laptop:flex-col laptop:justify-center laptop:ml-[20%] laptop:mr-[10%]">
        {isCompleted ?
          <div className="flex flex-col justify-content-center items-center mt-[15%] mb-[3rem] ">
            <img src={iconComplete} alt="You complete! S2" width={"25%"} />
            <h1 className="mt-[1rem] mb-[.5rem] text-3xl tracking-widest">Thank You!</h1>
            <p className="mb-[1rem] text-base normal-case text-gray-400">We`ve added your card details</p>
          </div> :
          <Form
            cardholder={cardholder}
            setCardholder={setCardholder}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cvc={cvc}
            setCvc={setCvc}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            className="laptop:col-[2]"
          />
        }
        <button
          onClick={handleCompleted}
        >Confirm</button>
      </div>
    </div>
  )
}