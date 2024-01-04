function generateHashtag(string) {
  const hastage = string.split(' ').reduce((hastagedWord, word) => {
    return hastagedWord += word.charAt(0).toUpperCase() + word.slice(1)
  }, '#')

 return  hastage.length > 140 || hastage.length === 1 ? false : hastage
}
module.exports = generateHashtag;
