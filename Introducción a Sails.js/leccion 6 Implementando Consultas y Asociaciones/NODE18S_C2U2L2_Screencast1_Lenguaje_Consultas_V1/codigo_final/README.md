```Javascript


const articulos = await Articulo.find({marca: "pera"})

const articulos = await Articulo.find({marca: "pera", precio: 60})

yarn add nodemon --save

npx nodemon app.js

const articulos = await Articulo.find({
      precio: {
        '>': 20
      }
    })


const articulos = await Articulo.find({
      where: {},
      skip:
      sort: ''
    })

const articulos = await Articulo.find({
      where: {

        precio: {
          '>': 20
        }

      },
      sort: 'precio ASC'
    })



```
