function countOccurrences(string, letter) {
    // Your code here
    let count = 0;
    for(let char of string) {
        if(char === letter) count++;
    }
    return count;
}
// solution two
// function countOccurrences(string, letter) {
//     // Your code here
//    return string.split(letter).length - 1;
// }

module.exports = countOccurrences;
