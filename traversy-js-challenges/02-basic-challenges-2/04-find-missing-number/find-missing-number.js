function findMissingNumber(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const firstNumber = sortedArray[0];
    const lastNumber = sortedArray[sortedArray.length - 1];
    for(let i = firstNumber; i < lastNumber; i++) {
        if(!sortedArray.includes(i)) {
            return i;
        }
    }
}

module.exports = findMissingNumber;
