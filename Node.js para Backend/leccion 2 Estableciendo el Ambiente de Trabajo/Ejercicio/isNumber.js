const isNumber = require("is-number");

const esNumero = (numero) => (isNumber(numero) ? "Es número" : "No es número");

module.exports = esNumero;
