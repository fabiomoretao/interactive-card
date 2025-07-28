import bgImg from "./assets/bg-main-mobile.png"
import cardBack from "./assets/bg-card-back.png"
import cardFront from "./assets/bg-card-front.png"
import cardLogo from "./assets/card-logo.svg"
import "./styles/app.css"
import { useState } from "react"

export default function App() {
  const [cardholder, setCardholder] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvc, setCvc] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  return (
    <div className="flex flex-col">
      <img
        src={bgImg}
        className="z-0 max-h-[20%]"
      />
      <div className="w-full max-w-7/10 -mt-[50%] self-center">
        <div className="w-full max-w-sm ml-[10%] z-10 flex items-center">
          <img
            src={cardBack}
            alt="back of credit card :o"
            className="block w-full h-auto" />
          <span
            className="text-white -translate-x-full pr-[10%] text-sm"
          >
            {cvc ? cvc : "000"}
          </span>
        </div>
        <div className="w-full max-w-sm flex -ml-[10%] -translate-y-[25%] -my-[10%] z-20 ">
          <img
            src={cardLogo}
            alt="back of credit card :o"
            className="absolute z-30 w-[20%] h-auto ml-[5%] mt-[5%]" />
          <img
            src={cardFront}
            alt="back of credit card :o"
            className="block w-full h-auto" />

          <div className="grid grid-cols-[70% 30%] w-[100%] -translate-x-[50%] -mx-[50%] mt-[25%] items-top">
            <span
              className="text-white tracking-widest col-[1/3] justify-self-center truncate"
            >
              {cardNumber ? cardNumber : "1234 5678 9123 0000"}
            </span>
            <span
              className="text-white text-sm col-[1] truncate pl-[1rem] mr-[1rem]"
            >
              {cardholder ? cardholder : "Jane Appleseed"}
            </span>
            <span
              className="text-white text-sm whitespace-nowrap col-[2] justify-self-end pr-[1rem]"
            >
              {month ? month : "00"}/{year ? year : "00"}
            </span>
          </div>
        </div>
      </div>
      <form>
        <div className="flex max-w-screen flex-col">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            name="cardholderName"
            id="cardholderName"
            placeholder="e.g. Jane Appleseed"
            value={cardholder}
            onChange={(ev) => setCardholder(ev.target.value)}
          />
        </div>
        <div className="flex max-w-screen flex-col">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={(ev) => setCardNumber(ev.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid-col-[1] grid grid-cols-2">
            <label
              htmlFor="cardExp"
              className="col-span-2"
            >Exp. Date (mm/yy)</label>
            <input
              type="text"
              name="cardExpMonth"
              id="cardExpMonth"
              className="col-[1] row-[2] mr-2"
              placeholder="MM"
              value={month}
              onChange={(ev) => setMonth(ev.target.value)}
            />
            <input
              type="text"
              name="cardExpYear"
              id="cardExpYear"
              className="col-[2] row-[2]"
              placeholder="YY"
              value={year}
              onChange={(ev) => setYear(ev.target.value)}
            />
          </div>
          <div className="grid-col-[2] flex flex-col">
            <label htmlFor="cardCvc">CVC</label>
            <input
              type="text"
              name="cardCvc"
              id="cardCvc"
              className="max-w-full"
              placeholder="e.g. 123"
              value={cvc}
              onChange={(ev) => setCvc(ev.target.value)}
            />
          </div>
        </div>
        <button className="mt-[1.5rem]">Confirm</button>
      </form>
    </div>
  )
}
