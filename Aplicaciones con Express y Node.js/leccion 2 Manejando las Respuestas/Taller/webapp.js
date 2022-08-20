const express = require("express");

const aplicacion = express();

aplicacion.set("view engine", "pug");

aplicacion.get("/", function (peticion, respuesta) {
  respuesta.render("pages/index");
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
