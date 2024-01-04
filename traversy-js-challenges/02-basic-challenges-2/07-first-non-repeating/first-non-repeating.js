function findFirstNonRepeatingCharacter(str) {
    const nonRepeatedCharacters = str.split('').filter(char => str.indexOf(char) == str.lastIndexOf(char))

  return nonRepeatedCharacters.length === 0 ? null : nonRepeatedCharacters[0];
}

module.exports = findFirstNonRepeatingCharacter;
