function validAnagrams(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('').trim().toLowerCase();
    const sortedStr2 = str2.split('').sort().join('').trim().toLowerCase();

    return sortedStr1  === sortedStr2;
}

module.exports = validAnagrams;
