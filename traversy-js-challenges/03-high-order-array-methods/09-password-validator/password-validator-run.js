const validatePassword = require('./password-validator');

const result1 = validatePassword('Abc12345');
const result2 = validatePassword('assword123');

console.log(result1, result2);
