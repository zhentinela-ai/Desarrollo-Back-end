# Agregando

Recuerda instalar los paquetes con `npm install`

## Agregando el formulario

Agregar los campos cada uno con el atributo `name` y colocar el formulario que envíe con `POST`

```HTML
<hr>
<h2>Agregar Producto</h2>
<form action="agregar" method="post">
  <fieldset>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" required="true">
    <label for="cantidad">Cantidad</label>
    <input type="number" name="cantidad" required="true">
    <label for="precio">Precio</label>
    <input type="number" name="precio" required="true">
    <input type="submit" value="Agregar">
  </fieldset>
</form>
```

## Agregando la ruta

Se crea la consulta, se envía y se redirige a `/`

```Javascript
aplicacion.post('/agregar', function (peticion, respuesta) {
  pool.getConnection(function(err, connection) {
    const query = `
      INSERT
      INTO productos
      (nombre, cantidad, precio)
      VALUES (
        ${connection.escape(peticion.body.nombre)},
        ${connection.escape(peticion.body.cantidad)},
        ${connection.escape(peticion.body.precio)}
      )`
    connection.query(query, function (error, filas, campos) {
      respuesta.redirect("/")
    })
    connection.release()
  })
})
```

