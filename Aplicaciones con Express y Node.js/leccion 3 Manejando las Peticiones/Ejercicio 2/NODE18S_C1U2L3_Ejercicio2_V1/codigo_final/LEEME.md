# Contador de Visitas en la Sesión Actual

Asegúrate de instalar `express-sesion` con

```
npm install express-session --save
```

Instancia y usa la sesión con:

```Javascript
const session = require('express-session')
aplicacion.use(session({ secret: 'token-muy-secreto', resave: true, saveUninitialized: true }));
```

Luego obten el valor de la sesión y sigue las siguientes reglas

- Si el valor es `undefined` crea un contador con valor `0`
- Luego incrementa el valor
- Responde con el valor incrementado
- Guarda el nuevo valor en la sesión

```Javascript
aplicacion.get('/', function(peticion, respuesta) {
  let visitas = peticion.session.visitas
  if (visitas == undefined){
    visitas = 0
  }
  visitas += 1
  peticion.session.visitas = visitas
  respuesta.send(`Visitas ${visitas}`);
});
```

Puedes refrescar varias veces la página para que veas como incrementa.
