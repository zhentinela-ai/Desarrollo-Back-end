const express = require('express')
const aplicacion = express()
const session = require('express-session')
aplicacion.use(session({ secret: 'token-muy-secreto', resave: true, saveUninitialized: true }));

aplicacion.get('/', function(peticion, respuesta) {
  let visitas = peticion.session.visitas
  if (visitas == undefined){
    visitas = 0
  }
  visitas += 1
  peticion.session.visitas = visitas
  respuesta.send(`Visitas ${visitas}`);
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});

