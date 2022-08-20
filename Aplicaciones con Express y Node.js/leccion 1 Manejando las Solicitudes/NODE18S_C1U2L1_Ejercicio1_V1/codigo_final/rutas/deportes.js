const express = require('express');
const enrutador = express.Router();

enrutador.get("/futbol", (peticion, respuesta) => {
  respuesta.send("Fútbol")
})

enrutador.get("/baloncesto", (peticion, respuesta) => {
  respuesta.send("Baloncesto")
})

module.exports = enrutador
