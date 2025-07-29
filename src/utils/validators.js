
function validateCardNumber(number) {
    const validCardNumber = /^(?:\d\s*){16}$/
    const isValid = number.match(validCardNumber)
    if (isValid) return true
    else false
}

// Modificação na função validateDate para validar o mês corretamente
function validateDate(date, type) {
    if (type === "month") {
        const validMonth = /^(0[1-9]|1[0-2])$/ // Aceita apenas 01-12
        return validMonth.test(date)
    } else if (type === "year") {
        const validDate = /^\d{2}$/ // Mantém a validação de dois dígitos para o ano
        return validDate.test(date)
    }
    return false
}

function validateCvc(number) {
    const validCvc = /^(?:\d\s*){3}$/
    const isValid = number.match(validCvc)
    if (isValid) return true
    else false
}

export { validateCardNumber, validateCvc, validateDate}