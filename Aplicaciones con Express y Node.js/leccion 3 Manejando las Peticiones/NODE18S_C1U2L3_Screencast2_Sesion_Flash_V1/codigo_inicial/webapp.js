const express = require("express");
const aplicacion = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");

aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: true }));
aplicacion.set("view engine", "ejs");
aplicacion.use(
  session({
    secret: "token-muy-secreto",
    resave: false,
    saveUninitialized: true,
  })
);
aplicacion.use(flash());

aplicacion.get("/", function (peticion, respuesta) {
  respuesta.render("index", { error: peticion.flash("error") });
});

aplicacion.get("/home", function (peticion, respuesta) {
  respuesta.render("home", { usuario: peticion.session.usuario });
});

aplicacion.get("/detalle", (peticion, respuesta) => {
  respuesta.render("detalle", { usuario: peticion.session.usuario });
});

aplicacion.post("/autenticar", function (peticion, respuesta) {
  if (peticion.body.usuario == "luis" && peticion.body.contrasena == "123456") {
    peticion.session.usuario = peticion.body.usuario;
    respuesta.redirect("/home");
  } else {
    peticion.flash("error", "Usuario o contraseña incorrectos");
    respuesta.redirect("/");
  }
});

aplicacion.get("/salir", (peticion, respuesta) => {
  peticion.session.destroy();
  respuesta.redirect("/");
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
