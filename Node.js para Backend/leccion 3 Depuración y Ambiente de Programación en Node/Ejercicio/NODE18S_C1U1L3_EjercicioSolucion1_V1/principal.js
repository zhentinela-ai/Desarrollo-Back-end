function calcularPrecio(edad, promocion) {
  let precio = 100

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
