function phoneNumberDirectory(arr) {
  const dictionary = new Map();

  for(const data of arr){
    const [key,value] = data.split(':');
    dictionary.set(key, value);
  }
  return dictionary;
}

module.exports = phoneNumberDirectory;
