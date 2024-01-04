function validateEmail(string) {
    if(string.startsWith('@') || string.endsWith('@') || string.startsWith('.') || string.endsWith('.')) {
        return false;
    }
   const charactersValidateEmail = string.split('').filter(ele => ele === '@' || ele === '.');
   return charactersValidateEmail.length >= 2;
}

module.exports = validateEmail;
