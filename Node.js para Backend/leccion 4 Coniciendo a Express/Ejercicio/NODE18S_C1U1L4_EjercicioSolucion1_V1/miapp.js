var express = require('express')
var aplicacion = express()

aplicacion.get("/", (peticion, respuesta) => {
  const saludos = ["Hola!", "Bienvenido!"]
  let indice
  if (Math.random() > 0.5) {
    indice = 0
  }
  else{
    indice =  1
  }
  respuesta.send(saludos[indice])
})

aplicacion.get("/despedida", (peticion, respuesta) => {
  const despedidas = ["Chao!", "Adios!", "Nos Vemos!"]
  let indice
  let aleatorio = Math.random()
  if (aleatorio < 0.33) {
    indice = 0
  }
  else if (aleatorio < 0.66) {
    indice = 1
  }
  else {
    indice = 2
  }
  respuesta.send(despedidas[indice])
})

aplicacion.listen(8080, () => {
  console.log("Servidor Iniciado");
})
