function displayLikes(array) {
   const length = array.length;
   switch(length){
    case 0:
        return 'no one likes this';
    case 1:
        return `${array[0]} likes this`;
    case 2:
        return `${array[0]} and ${array[1]} like this`;
    case 3:
        return `${array[0]}, ${array[1]} and ${array[2]} like this`;
    default:
        return `${array[0]}, ${array[1]} and ${length - 2} others like this`;
   }
}

module.exports = displayLikes;
