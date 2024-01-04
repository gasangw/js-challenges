function validatePassword(password) {
    const isLengthValid = password.length >= 8;

    const hasUpperCase = password.split('').some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

    const hasLowerCase = password.split('').some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

    const hasInteger = password.split('').some(char => !isNaN(parseInt(char)))

    return isLengthValid && hasUpperCase && hasLowerCase && hasInteger;

  
}

module.exports = validatePassword;
