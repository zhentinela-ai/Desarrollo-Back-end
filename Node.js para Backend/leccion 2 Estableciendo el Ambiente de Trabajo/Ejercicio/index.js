const esNumero = require("./isNumber");

console.log(esNumero("uno"));
console.log(esNumero('uno'));
console.log(esNumero(`uno`));
console.log(esNumero(1));
console.log(esNumero(1.0));
console.log(esNumero(1.00000000));
console.log(esNumero(01));
