const express = require('express');

const aplicacion = express();

aplicacion.use("/static", express.static("assets"));

aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ejemplo</title>
      <link rel="stylesheet" href="/stylesheets/webapp.css" />
    </head>
    <body>
      <h1>Bienvenido</h1>
      <p>Praticando con Express</p  >
    </body>
    </html>
    `
  );
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});


