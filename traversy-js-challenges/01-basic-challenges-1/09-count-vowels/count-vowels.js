function countVowels(string) {
    return string.replace(/[^aeiou]/gi, '').length;
}

module.exports = countVowels;
