const express = require('express');

const aplicacion = express();

const bodyParser = require('body-parser')

aplicacion.use(bodyParser.json())
aplicacion.use(bodyParser.urlencoded({ extended: true }))


aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send(`Bienvenido ${peticion.query.nombre}`);
});

aplicacion.get('/persona/:id', function(peticion, respuesta) {
  respuesta.send(`Bienvenido: ${peticion.params.id}`);
})

aplicacion.post('/procesar', function(peticion, respuesta) {
  respuesta.send(`Número: ${peticion.body.numero}`);
});

aplicacion.get('/formulario', function(peticion, respuesta) {
  respuesta.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Ejemplo</title>
    </head>
    <body>
        <form action="/procesar" method="post">
            <p>
                <label for="numero">Número</label>
                <input type="text" name="numero">
            </p>
            <p>
                <button type="submit">Calcular</button>
            </p>
        </form>
    </body>
    </html>
  `);
});


aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
