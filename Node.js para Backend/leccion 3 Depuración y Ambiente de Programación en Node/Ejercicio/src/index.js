const precioEntrada = (edad, cupon = false) => {
  let descuento = 1;
  let precio = 0;
  if (edad <= 12) {
    precio = 0;
  } else if ((edad >= 18) & (edad <= 64)) {
    precio = 100;
  } else if (edad >= 65) {
    precio = 60;
  }

  if (cupon) {
    descuento = 0.3;
    return precio - precio * descuento;
  } else {
    return precio;
  }
};

console.log(precioEntrada(12));
console.log(precioEntrada(18));
console.log(precioEntrada(65));
console.log(precioEntrada(12, true));
console.log(precioEntrada(18, true));
console.log(precioEntrada(65, true));
