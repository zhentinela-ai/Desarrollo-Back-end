```Javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Inicio de Sesion</title>
</head>
<body>
  <h1>Inicio de Sesión</h1>
  <div>
    <form action="">
      <p>
        <label for="">Usuario</label>
        <input type="text" name="usuario">
      </p>
      <p>
        <label for="">Contraseña</label>
        <input type="password" name="contrasena">
      </p>
      <p>
        <button type="submit">Continuar</button>
      </p>
    </form>
  </div>
</body>
</html>


aplicacion.get("/inicio", (peticion, respuesta) =>{
  respuesta.sendFile(__dirname + "/paginas/inicio.html")
})

aplicacion.use((peticion, respuesta, siguiente) => {
  console.log("Se hizo una petición");
  siguiente()
})

aplicacion.get("/privada", (peticion, respuesta) =>{
  respuesta.send("Privada")
})

const express = require('express')
const enrutador = express.Router()

enrutador.use("/privada", (peticion, respuesta, siguiente) => {
  console.log("No ha iniciado sesión");
  respuesta.redirect("/inicio")
})

module.exports = enrutador;

const autenticador = require("./middleware/autenticador")

aplicacion.use(autenticador)

```
