const express = require('express');

const aplicacion = express();

aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send('Hello world');
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
