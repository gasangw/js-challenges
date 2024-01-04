function reverseString(string) {
    if(string === '') return '';

    return reverseString(string.slice(1)) + string.charAt(0)
}

module.exports = reverseString;
