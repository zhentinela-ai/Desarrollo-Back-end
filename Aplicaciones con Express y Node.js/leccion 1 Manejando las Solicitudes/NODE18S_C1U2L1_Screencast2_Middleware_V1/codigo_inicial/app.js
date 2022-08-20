const express = require('express')
const aplicacion = express()
const autenticador = require("./middleware/autenticador")

aplicacion.use((peticion, respuesta, siguiente) => {
  console.log("Se hizo una petición");
  siguiente()
})

aplicacion.get("/", (peticion, respuesta) =>{
  respuesta.send("Bienvenido")
})

aplicacion.get("/inicio", (peticion, respuesta) =>{
  respuesta.sendFile(__dirname + "/paginas/inicio.html")
})

aplicacion.use(autenticador)

aplicacion.get("/privada", (peticion, respuesta) =>{
  respuesta.send("Privada")
})

aplicacion.listen(8080, () => {
  console.log("Servidor iniciado")
})
