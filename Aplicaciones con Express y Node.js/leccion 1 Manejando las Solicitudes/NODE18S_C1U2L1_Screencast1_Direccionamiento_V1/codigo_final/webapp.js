const express = require('express');
const aplicacion = express();
const rutasSaludar = require('./routes/saludar')

aplicacion.get('/', function(req, res) {
  res.send('Bienvenido');
});

aplicacion.use('/saludar', rutasSaludar)

aplicacion.get(/^\/desped/, function(req, res) {
  res.send('Adios');
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
