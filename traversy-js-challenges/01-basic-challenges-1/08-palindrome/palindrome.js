function isPalindrome(word) {
    let joinedWord = word.replace(/[^a-z]/gi, '').toLowerCase()
    return joinedWord.split('').reverse().join('') === joinedWord
}

module.exports = isPalindrome;
