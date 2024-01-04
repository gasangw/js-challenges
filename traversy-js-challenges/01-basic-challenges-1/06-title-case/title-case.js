function titleCase(str) {
    return str.split(' ').map(word => {
     return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

module.exports = titleCase;
