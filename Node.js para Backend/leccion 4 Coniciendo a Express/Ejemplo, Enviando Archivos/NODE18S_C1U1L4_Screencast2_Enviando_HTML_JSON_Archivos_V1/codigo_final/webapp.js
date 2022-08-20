const express = require('express');

const aplicacion = express();

aplicacion.get('/', function(req, res) {

  const fecha =  new Date();
  res.type("html")
  res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Ejemplo</title>
    </head>

    <body>
        <h1>Blog</h1>
        <a href="/acerca_de">Acerca de</a>
        <h6>${fecha}</h6>
        <p>Bienvenido a este blog</p>
    </body>

    </html>
  `);
});

aplicacion.get('/acerca_de', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.sendFile(__dirname + "/public/acerca_de.html")
})

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
