const express = require("express");

const aplicacion = express();

const bodyParser = require("body-parser");

aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: true }));

// http://localhost:8080/?nombre=maria&apellido=torres
aplicacion.get("/", function (peticion, respuesta) {
  respuesta.send(
    `Bienvenido ${peticion.query.nombre} ${peticion.query.apellido}`
  );
});

// /persona/:id/direccion/:direccion
aplicacion.get("/persona/:id", (peticion, respuesta) => {
  respuesta.send(`Bienvenido ${peticion.params.id}`);
});

aplicacion.post("/procesar", (peticion, respuesta) => {
  respuesta.send(`Número: ${peticion.body.numero}`);
});

aplicacion.get("/formulario", (peticion, respuesta) => {
  respuesta.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo</title>
  </head>
  <body>
    <form action="/procesar" method="post">
      <p>
        <label htmlFor="numero">Número</label>
        <input type="text" name="numero" />
      </p>
      <p>
        <button type="submit">Calcular</button>
      </p>
    </form>
  </body>
  </html>
  `);
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
