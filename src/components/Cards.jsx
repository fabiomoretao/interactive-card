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
        <div className="w-[80%] absolute transform -translate-y-[80%] flex flex-col items-center mx-4
        laptop:translate-y-[50%] laptop:translate-x-[50%]">
            <div className="w-full max-w-sm ml-[30%] z-10 flex items-center shadow-[0_0_10px_1px_rgba(0,0,0,0.8)] rounded-lg
                tablet:transform tablet:-translate-y-[10%]
                laptop:translate-y-full">
                <img
                    src={cardBack}
                    alt="back of credit card :o"
                    className="block w-full h-auto" />
                <span
                    className="text-white transform -translate-x-full pr-[15%] text-sm
                    tablet:text-xl
                    laptop:text-sm laptop:translate-x-[-25%] laptop:mx-[-15%]
                    laptop-lg:text-xl"
                >
                    {props.cvc ? props.cvc : "000"}
                </span>
            </div>
            <div className="w-full max-w-sm flex transform -translate-y-[25%] -my-[10%] z-20 shadow-[0_0_10px_1px_rgba(0,0,0,0.8)] rounded-lg
            laptop:transform laptop:-translate-y-full laptop:-translate-x-[10%]
            laptop-lg:text-lg">
                <img
                    src={cardLogo}
                    alt="logo of credit card :p"
                    className="absolute z-30 w-[20%] h-auto ml-[5%] mt-[5%]" />
                <img
                    src={cardFront}
                    alt="front of credit card :o"
                    className="block w-full h-auto" />

                <div className="grid grid-cols-[70% 30%] w-[100%] -translate-x-[50%] -mx-[50%] mt-[25%] items-top px-[1rem]">
                    <span
                        className="text-white tracking-widest col-[1/3] justify-self-center
                        mobile:text-[22px] 
                        tablet:text-[25px]
                        laptop:text-[20px]
                        laptop-lg:text-[28px]"
                        style={{ maxWidth: "100%", overflow: "hidden", whiteSpace: "nowrap" }}
                    >
                        {props.cardNumber ? formatCardNumber(props.cardNumber) : "1234 5678 9123 0000"}
                    </span>
                    <span
                        className="text-white text-sm col-[1] truncate mr-[1rem] min-w-[90%]
                        tablet:text-xl
                        laptop:text-sm
                        laptop-lg:text-lg"
                    >
                        {props.cardholder ? props.cardholder : "Jane Appleseed"}
                    </span>
                    <span
                        className="text-white text-sm whitespace-nowrap col-[2] justify-self-end
                        tablet:text-xl
                        laptop:text-sm
                        laptop-lg:text-lg"
                    >
                        {props.month ? props.month : "00"}/{props.year ? props.year : "00"}
                    </span>
                </div>
            </div>
        </div>
    )
}