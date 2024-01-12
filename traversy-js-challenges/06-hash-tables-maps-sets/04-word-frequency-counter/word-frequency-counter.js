function wordFrequencyCounter(str) {
  const countedWords = new Map();

  const lowerCaseStr = str.toLowerCase().split(/\W+/);

  for(const word of lowerCaseStr){
    if(word.trim() === '') continue;

    if(countedWords.has(word)){
      countedWords.set(word, countedWords.get(word) + 1)
    } else {
      countedWords.set(word, 1)
    }
  }
  return countedWords;
}

module.exports = wordFrequencyCounter;
