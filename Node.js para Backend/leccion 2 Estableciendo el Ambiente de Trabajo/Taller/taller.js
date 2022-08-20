var isNumber = require("is-number");

console.log(isNumber("uno"));
console.log(isNumber('uno'));
console.log(isNumber(`uno`));
console.log(isNumber(1));
console.log(isNumber(1.0));
console.log(isNumber(1.000000));
console.log(isNumber(01));