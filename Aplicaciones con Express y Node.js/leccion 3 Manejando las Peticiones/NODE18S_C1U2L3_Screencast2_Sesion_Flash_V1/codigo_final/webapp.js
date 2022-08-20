const express = require('express')
const aplicacion = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')

aplicacion.use(bodyParser.json())
aplicacion.use(bodyParser.urlencoded({ extended: true }))
aplicacion.set("view engine", "ejs")
aplicacion.use(session({ secret: 'token-muy-secreto', resave: true, saveUninitialized: true }));
aplicacion.use(flash())

aplicacion.get('/', function (peticion, respuesta) {
  respuesta.render('index', { error: peticion.flash('error') })
});

aplicacion.get('/home', function (peticion, respuesta) {
  respuesta.render('home', { usuario: peticion.session.usuario })
});

aplicacion.get('/detalle', function (peticion, respuesta) {
  respuesta.render('detalle', { usuario: peticion.session.usuario })
});

aplicacion.post('/autenticar', function (peticion, respuesta) {
  if (peticion.body.usuario == "luis" && peticion.body.contrasena == "123456") {
    peticion.session.usuario = peticion.body.usuario
    respuesta.redirect("/home")
  }
  else {
    peticion.flash('error', "Datos incorrectos")
    respuesta.redirect("/")
  }
});

aplicacion.get('/salir', function (peticion, respuesta) {
  peticion.session.destroy();
  respuesta.redirect("/")
});


aplicacion.listen(8081, function () {
  console.log("Servidor iniciado")
});
