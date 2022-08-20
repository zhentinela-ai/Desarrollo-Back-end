# Creando un middlware

Recuerda crear tu tabla `navegador`. Así mismo crea el modelo `Navegador` con los atributos correspondientes.

Luego crea tu funcion middleware

```Javascript
registrarNavegador : (function registrarNavegador(){
    return async function(req,res,next){
      let userAgent = req.headers['user-agent']
      await Navegador.create({
        fecha_hora: new Date(),
        nav: userAgent
      })
      return next();
    }
  })()
```

Y colócala en la cadena de `Middleware`

```Javascript
    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'registrarNavegador', // <-- 
      'router',
      'www',
      'favicon',
    ],

```
