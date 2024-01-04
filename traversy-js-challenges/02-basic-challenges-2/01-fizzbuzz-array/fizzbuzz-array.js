function fizzBuzzArray(number) {
    const fizzBuzzArray = [];
    for(let i = 1; i <= number; i++){
      if(i %3 === 0 && i % 5 ===0){
        fizzBuzzArray.push('FizzBuzz');
      } else if(i % 3 ===0){
        fizzBuzzArray.push('Fizz');
      } else if( i % 5 ===0){
        fizzBuzzArray.push('Buzz');
      } else {
        fizzBuzzArray.push(i);
      }
    }
    return fizzBuzzArray;
}

module.exports = fizzBuzzArray;
