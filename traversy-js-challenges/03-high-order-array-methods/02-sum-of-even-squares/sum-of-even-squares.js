function sumOfEvenSquares(array) {
  return array.filter(num => num % 2 === 0).reduce((acc, curr) => acc += (curr * curr),0)
}

module.exports = sumOfEvenSquares;
