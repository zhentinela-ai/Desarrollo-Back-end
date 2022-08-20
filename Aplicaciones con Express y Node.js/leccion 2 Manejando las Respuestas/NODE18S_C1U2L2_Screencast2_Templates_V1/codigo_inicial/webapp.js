const express = require("express");

const aplicacion = express();

aplicacion.set("view engine", "ejs");

aplicacion.get("/", function (peticion, respuesta) {
  respuesta.render("pages/index", {
    nombre: "luis"
  });
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
