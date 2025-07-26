import bgImg from "./assets/bg-main-mobile.png"
import cardBack from "./assets/bg-card-back.png"
import cardFront from "./assets/bg-card-front.png"
import cardLogo from "./assets/card-logo.svg"
import "./styles/app.css"

export default function App() {
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
            000
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

          <div className=" grid grid-cols-2 -translate-x-[50%] -mx-[50%] mt-[25%] items-top justify-content-center">
            <span
              className="text-white tracking-widest whitespace-nowrap col-[1/3]"
            >
              1234 5678 9123 0000
            </span>
            <span
              className="text-white text-sm whitespace-nowrap col-[1] "
            >
              Jane Appleseed
            </span>
            <span
              className="text-white text-sm whitespace-nowrap col-[2] justify-self-end"
            >
              00/00
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
