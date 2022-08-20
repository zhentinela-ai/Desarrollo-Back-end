const express = require('express');
const aplicacion = express();

const rutasGenerales = require('./rutas/generales')
const rutasDeportes = require('./rutas/deportes')
const rutasConciertos = require('./rutas/conciertos')

aplicacion.use(rutasGenerales)
aplicacion.use(rutasConciertos)
aplicacion.use(rutasDeportes)

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
