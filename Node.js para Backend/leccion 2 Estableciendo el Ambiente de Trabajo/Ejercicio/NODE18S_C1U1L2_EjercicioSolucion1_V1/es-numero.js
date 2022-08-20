var isNumber = require('is-number')

function esNumero(expresion){
  if (isNumber(expresion)){
    return "Es un número"
  }
  return "No es un número"
}

module.exports = esNumero
