function symmetricDifference(arr1, arr2) {
   const newArr1 = arr1.filter((item) => !arr2.includes(item));
   const newArr2 = arr2.filter((item) => !arr1.includes(item));
   return newArr1.concat(newArr2);  
}

module.exports = symmetricDifference;
