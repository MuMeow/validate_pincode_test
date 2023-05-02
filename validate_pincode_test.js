// validate pincode test

// success
const input = 11223982
// error type
// const input = "11223982"
// error same number
// const input = 1112547
// error sequence
// const input = 1122345
// error same group
// const input = 11223955

const validatePincode = (input) => {
    if (typeof input != "number") {
        return "invalid type"
    }

    if (!(/^[0-9]{6,}$/.test(input))) {
        return "invalid length"
    }

    if ((/([0-9])\1{2,}/.test(input))) {
        return "error same number more than 2"
    }

    if ((/(012|123|234|345|456|567|678|789)/.test(input))) {
        return "error sequence number more than 2"
    }

    if ((/([0-9])\1+.*([0-9])\2+.*([0-9])\3+/.test(input))) {
        return "error same group of number more than 2"
    }

    return "Success"

}

console.log(validatePincode(input))