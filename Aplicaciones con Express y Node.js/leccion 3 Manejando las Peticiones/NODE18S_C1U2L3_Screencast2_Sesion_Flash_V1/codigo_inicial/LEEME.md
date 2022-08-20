```Javascript

aplicacion.post('/autenticar', function (peticion, respuesta) {
  if (peticion.body.usuario == "luis" && peticion.body.contrasena == "123456") {
    respuesta.redirect("/home")
  }
  else {
    respuesta.redirect("/")
  }
});

npm install express-session --save

const session = require('express-session')

aplicacion.use(session({ secret: 'token-muy-secreto', resave: true, saveUninitialized: true }));

peticion.session.usuario = peticion.body.usuario

respuesta.render('home', { usuario: peticion.session.usuario })

<%=usuario%>

aplicacion.get('/salir', function (peticion, respuesta) {
  peticion.session.destroy();
  respuesta.redirect("/")
});

npm install express-flash --save

const flash = require('express-flash')

aplicacion.use(flash())

peticion.flash('error', "Datos incorrectos")

respuesta.render('index', { error: peticion.flash('error') })

```
