const express = require('express');

const aplicacion = express();

aplicacion.get('/', function(req, res) {
  res.send('Bienvenido');
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
