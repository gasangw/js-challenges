function formatPhoneNumber(array) {
    let phoneNumber = array.join('');
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6)}`
}

module.exports = formatPhoneNumber;
