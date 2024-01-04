function areAllCharactersUnique(str) {
    const repeatedCharacters = str.split('').filter(char => str.indexOf(char) !== str.lastIndexOf(char))

    return repeatedCharacters.length === 0;
}

module.exports = areAllCharactersUnique;
