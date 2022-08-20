# Saludos y Despedidas

Primero creamos nuestra aplicación base

```Javascript
var express = require('express')
var aplicacion = express()

aplicacion.get("/", (peticion, respuesta) => {
})

aplicacion.listen(8080,() => {
  console.log("Servidor Iniciado");
})
```

y agregamos otra ruta

```Javascript
var express = require('express')
var aplicacion = express()

aplicacion.get("/", (peticion, respuesta) => {
})

aplicacion.get("/despedida", (peticion, respuesta) => {
})

aplicacion.listen(8080,() => {
  console.log("Servidor Iniciado");
})
```

Ahora procedemos a crear un arreglo con los posibles saludos

```Javascript
const saludos = ["Hola!", "Bienvenido!"]
```

Luego generamos un número aleatorio y definimos un índice según sea el caso

```Javascript
const saludos = ["Hola!", "Bienvenido!"]
let indice
if (Math.random() > 0.5) {
  indice = 0
}
else{
  indice =  1
}
respuesta.send(saludos[indice])
```

Hacemos algo equivalente para la despedida

```Javascript
const despedidas = ["Chao!", "Adios!", "Nos Vemos!"]
let indice
let aleatorio = Math.random()
if (aleatorio < 0.33) {
  indice = 0
}
else if (aleatorio < 0.66) {
  indice = 1
}
else {
  indice = 2
}
respuesta.send(despedidas[indice])
```
