function anagramGrouping(arr) {
  const anagram = new Map()

 for(let str of arr){
   const orderedStr = str.split('').sort().join('')
   if(anagram.has(orderedStr)){
    anagram.set(orderedStr, [...anagram.get(orderedStr), str])
   } else {
    anagram.set(orderedStr, [str])
   }

 }
 return Array.from(anagram.values())
}

module.exports = anagramGrouping;
