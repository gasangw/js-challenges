function findMissingLetter(arr) {
 let startCharacter = arr[0].charCodeAt(0)

const missingCharacter = arr.map(char => char.charCodeAt(0)).find(ele => {
   if(ele  - startCharacter > 1) {
       return true
   }
   startCharacter = ele

   return false
})
 return missingCharacter ? String.fromCharCode(missingCharacter - 1) : ''
}

module.exports = findMissingLetter;
