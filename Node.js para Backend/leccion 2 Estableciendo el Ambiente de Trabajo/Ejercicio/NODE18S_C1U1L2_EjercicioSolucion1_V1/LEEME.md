# Es número

Para instalar el módulo `is-number` debes correr

```bash
npm install is-number --save
```

## 1. Crea tu módulo en el archivo `es-numero.js`

```Javascript
var isNumber = require('is-number') // <-- importa is-number

function esNumero(expresion){ // <-- define la función
  if (isNumber(expresion)){
    return "Es un número"
  }
  return "No es un número"
}

module.exports = esNumero // <-- exporta la función
```

## 2. Crea tu programa principal y prueba

```Javascript
var esNumero = require('./es-numero') // <-- importa tu módulo


// luego usa esNumero 
console.log(esNumero("uno"))
console.log(esNumero('uno'))
console.log(esNumero(`uno`))
console.log(esNumero(1))
console.log(esNumero(1.0))
console.log(esNumero(1.000000))
console.log(esNumero(01))
```


