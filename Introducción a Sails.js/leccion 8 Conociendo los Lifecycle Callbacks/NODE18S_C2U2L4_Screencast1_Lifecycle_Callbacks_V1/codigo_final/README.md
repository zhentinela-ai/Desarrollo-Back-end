```Javascript

const nuevo = await Articulo.create({

    })

    const nuevo = await Articulo.create({
      marca: "pera",
      modelo: "ipon17",
      descripcion: "Bueno",
      precio: 100,
      usuario: 1
    })


  beforeCreate(valores, proceed){


  }

        beforeCreate(valores, proceed){

      valores.impuesto = valores.precio * 5 / 100.0
      return proceed()
    }



```
