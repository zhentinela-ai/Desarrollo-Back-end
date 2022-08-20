const express = require('express');
const enrutador = express.Router();

enrutador.get("/", (peticion, respuesta) => {
  respuesta.send("Bienvenido")
})

module.exports = enrutador
