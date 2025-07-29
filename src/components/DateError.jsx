export default function DateError({ month, year, dateIsValid }) {
    if (!dateIsValid && (year !== '' || month !== '')) {
        if (!/^(0[1-9]|1[0-2])$/.test(month)) {
            return (
                <span className="text-red-600 text-sm col-[1/3] row-3">
                    enter a valid month
                </span>
            )
        }
        if (year === '' || month === '') {
            return (
                <span className="text-red-600 text-sm col-[1/3] row-3">
                    Can't be blank
                </span>
            )
        }
        return (
            <span className="text-red-600 text-sm col-[1/3] row-3">
                must have 2 numbers
            </span>
        )
    }
    return null;
}