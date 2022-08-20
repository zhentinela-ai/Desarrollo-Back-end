# Validando del lado del servidor

Primero debemos instalar `body-parser` para procesar parámetros enviados por `POST`

```
npm install body=parser
```

Luego lo usamos

```Javascript
var bodyParser = require('body-parser')

aplicacion.use(bodyParser.urlencoded({ extended: false }))
aplicacion.use(bodyParser.json())
```

Entonces usamos expresiones regulares para validar los campos


```Javascript
aplicacion.post('/procesar', function(peticion, respuesta) {
  let re;
  re = /^[^ ]{6,}/
  if (!re.test(peticion.body.usuario)){
    respuesta.send("ERROR")
    return
  }
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(peticion.body.email)){
    respuesta.send("ERROR")
    return
  }
  respuesta.send("OK")
});
```
