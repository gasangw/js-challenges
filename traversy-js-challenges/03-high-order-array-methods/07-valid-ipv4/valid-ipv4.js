const isValidIPv4 = (string) => {
    const arrayOfValues = string.split('.')

    if(arrayOfValues.length !== 4) return false;

    return arrayOfValues.every(value => {
        return (Number(value) >= 0 && Number(value) <= 255 && value === Number(value).toString())
    })
};

module.exports = isValidIPv4;
