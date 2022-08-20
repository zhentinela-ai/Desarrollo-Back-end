const express = require('express')
const enrutador = express.Router()

enrutador.use("/privada", (peticion, respuesta, siguiente) => {
  console.log("No ha iniciado sesión");
  respuesta.redirect("/inicio")
})

module.exports = enrutador;
