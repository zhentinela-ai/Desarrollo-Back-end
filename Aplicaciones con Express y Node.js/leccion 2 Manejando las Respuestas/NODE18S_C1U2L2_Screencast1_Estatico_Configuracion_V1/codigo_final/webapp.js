const express = require('express');

const aplicacion = express();

aplicacion.use('/static', express.static('assets'));


aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Ejemplo</title>
      <link rel="stylesheet" href="/static/stylesheets/webapp.css">
    </head>
    <body>
      <h1>Bienvenido</h1>
      <p>Practicando con Express</p>
    </body>
    </html>
    `
  );
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});


/*

IDEAS

yarn install

cambiar a HTML

<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejemplo</title>
  </head>
  <body>
    <h1>Bienvenido</h1>
    <p>Practicando con Express</p>
  </body>
  </html>

agregar

<link rel="stylesheet" href="webapp.css">

aplicacion.use(express.static('stylesheets'));

agregar carpeta images e imagen

aplicacion.use(express.static('images'));


crear assets

y mover css

y mover referencia de la imagen


*/
