const express = require('express');
const enrutador = express.Router();

enrutador.get("/tango", (peticion, respuesta) => {
  respuesta.send("Tango")
})

enrutador.get("/salsa", (peticion, respuesta) => {
  respuesta.send("Salsa")
})

module.exports = enrutador
