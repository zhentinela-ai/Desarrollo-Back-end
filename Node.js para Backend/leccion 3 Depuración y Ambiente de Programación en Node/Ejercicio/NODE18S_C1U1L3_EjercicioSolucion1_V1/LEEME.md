# Calculando el precio

En este caso se creará la función calcularPrecio que recibe dos parámretros

```Javascript
function calcularPrecio(edad, promocion) {
}
```

Luego colocaremos el precio según cada casos

```Javascript
let precio = 100

if (edad <= 12) {
  precio = 0
}

if (edad >= 65) {
  precio = 60
}
```

Luego aplicamos el descuento

```Javascript
if (promocion) {
  precio *= (1 - 30 / 100) // se resta el 30%
}
```

Finalmente colocamos la función con los `console.log` que permitan armar la traza

```Javascript
function calcularPrecio(edad, promocion) {
  let precio

  if (edad <= 12) {
    precio = 0
    // console.log("edad menor de 12");
  }

  if (edad >= 65) {
    precio = 60
    // console.log("edad mayor de 12");
  }

  if (promocion) {
    precio *= (1 - 30 / 100) // se resta el 30%
    // console.log("aplica la promocion");
  }

  return precio
}

console.log(calcularPrecio(10, true))
console.log(calcularPrecio(10, false))
console.log(calcularPrecio(30, true))
console.log(calcularPrecio(30, false))
console.log(calcularPrecio(70, true))
console.log(calcularPrecio(70, false))
```
