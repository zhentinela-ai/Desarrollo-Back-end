const express = require('express');
const aplicacion = express();

aplicacion.set('view engine', 'ejs')

aplicacion.get('/', function(peticion, respuesta) {
  const datos = {
    nombre: "ZSE",
    direccion: "Calle 3 con Avenida 3. Edificio AURA. Local 1",
    telefonos: ["123-123123", "124-124124"]
  }
  respuesta.render('index', {datos: datos});
});

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado");
});
