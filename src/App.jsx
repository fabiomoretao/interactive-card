import bgImg from "./assets/bg-main-mobile.png"
import cardBack from "./assets/bg-card-back.png"
import cardFront from "./assets/bg-card-front.png"
import "./styles/app.css"

export default function App() {
  return (
    <div className="flex flex-col">
      <img 
      src={bgImg} 
      className="z-0"
      />
      <div className="w-full max-w-7/10 z-10 -mt-[50%] self-center">
        <img src={cardBack} alt="back of credit card :)" className="ml-[15%] -mb-[23.6%]"/>
        <img src={cardFront} alt="front of credit card ;p" />
      </div>
      <form>
        <div className="flex max-w-screen flex-col">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            name="cardholderName"
            id="cardholderName"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="flex max-w-screen flex-col">
          <label htmlFor="cardNumber">Card Number</label>
          <input 
          type="text" 
          name="cardNumber" 
          id="cardNumber" 
          placeholder="e.g. 1234 5678 9123 0000" />
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
            />
            <input
              type="text"
              name="cardExpYear"
              id="cardExpYear"
              className="col-[2] row-[2]"
              placeholder="YY"
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
            />
          </div>
        </div>
        <button className="mt-[1.5rem]">Confirm</button>
      </form>
    </div>
  )
}
