const express = require('express')
const aplicacion = express()
var bodyParser = require('body-parser')

aplicacion.use(bodyParser.urlencoded({ extended: false }))
aplicacion.use(bodyParser.json())

aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inicio de Sesion</title>
  </head>
  <body>
    <h1>Inicio de Sesión</h1>
    <div>
      <form action="/procesar" method="post">
        <p>
          <label for="">Usuario</label>
          <input type="text" name="usuario">
        </p>
        <p>
          <label for="">Email</label>
          <input type="text" name="email">
        </p>
        <p>
          <button type="submit">Continuar</button>
        </p>
      </form>
    </div>
  </body>
  </html>`);
});

aplicacion.post('/procesar', function(peticion, respuesta) {
  let re;
  re = /^[^ ]{6,}/
  if (!re.test(peticion.body.usuario)){
    respuesta.send("ERROR")
    return
  }
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(peticion.body.email)){
    respuesta.send("ERROR")
    return
  }
  respuesta.send("OK")
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
