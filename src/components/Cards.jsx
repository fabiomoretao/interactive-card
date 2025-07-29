import cardBack from "../assets/bg-card-back.png"
import cardFront from "../assets/bg-card-front.png"
import cardLogo from "../assets/card-logo.svg"

function formatCardNumber(number) {
  const digitsOnly = number.replace(/\D/g, '');
  const groups = digitsOnly.match(/.{1,4}/g) || [];
  return groups.join(' ');
}

export default function Cards(props) {
    return (
        <div className="w-full max-w-7/10 -mt-[50%] self-center">
            <div className="w-full max-w-sm ml-[10%] z-10 flex items-center">
                <img
                    src={cardBack}
                    alt="back of credit card :o"
                    className="block w-full h-auto" />
                <span
                    className="text-white -translate-x-full pr-[10%] text-sm"
                >
                    {props.cvc ? props.cvc : "000"}
                </span>
            </div>
            <div className="w-full max-w-sm flex -ml-[10%] -translate-y-[25%] -my-[10%] z-20 ">
                <img
                    src={cardLogo}
                    alt="front of credit card :p"
                    className="absolute z-30 w-[20%] h-auto ml-[5%] mt-[5%]" />
                <img
                    src={cardFront}
                    alt="back of credit card :o"
                    className="block w-full h-auto" />

                <div className="grid grid-cols-[70% 30%] w-[100%] -translate-x-[50%] -mx-[50%] mt-[25%] items-top px-[1rem]">
                    <span
                        className="text-white tracking-widest col-[1/3] justify-self-center"
                        style={{ maxWidth: "100%", overflow: "hidden", whiteSpace: "nowrap" }}
                    >
                        {props.cardNumber ? formatCardNumber(props.cardNumber) : "1234 5678 9123 0000"}
                    </span>
                    <span
                        className="text-white text-sm col-[1] truncate mr-[1rem] min-w-[90%]"
                    >
                        {props.cardholder ? props.cardholder : "Jane Appleseed"}
                    </span>
                    <span
                        className="text-white text-sm whitespace-nowrap col-[2] justify-self-end"
                    >
                        {props.month ? props.month : "00"}/{props.year ? props.year : "00"}
                    </span>
                </div>
            </div>
        </div>
    )
}