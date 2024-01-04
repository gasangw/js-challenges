function findMissingLetter(array) {
  let missingLetter = '';
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i + 1].charCodeAt() - array[i].charCodeAt() > 1){
        missingLetter = String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
  return missingLetter;
}

module.exports = findMissingLetter;
