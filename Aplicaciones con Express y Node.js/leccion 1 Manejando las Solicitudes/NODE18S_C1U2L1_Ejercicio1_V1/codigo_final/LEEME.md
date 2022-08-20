# Creando rutas

Para crear cada ruta se creará un archivo dentro de la carpeta `rutas` con la siguiente estructura:

```Javascript
const express = require('express');
const enrutador = express.Router();

enrutador.get(<ruta>, (peticion, respuesta) => {
  respuesta.send(<respuesta>)
})

module.exports = enrutador
```

Y luego deberás usarlo en el programa principal con:

```Javascript
const <ruta> = require('<direccion-archivo-rutas>')
...

aplicacion.use(<ruta>)
```



