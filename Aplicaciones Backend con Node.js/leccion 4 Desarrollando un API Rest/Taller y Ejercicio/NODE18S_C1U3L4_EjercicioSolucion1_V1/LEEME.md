# Actualizando

La estrategía en esta ocasión es tomar los parámetros que vienen en el cuerpo de la peticion y hacer un query dinámico.

```Javascript
modificaciones = []
if (peticion.body.nombre){
  modificaciones.push(` nombre=${connection.escape(peticion.body.nombre)} `)
}
if (peticion.body.cantidad){
  modificaciones.push(` cantidad=${connection.escape(peticion.body.cantidad)} `)
}
if (peticion.body.precio){
  modificaciones.push(` precio=${connection.escape(peticion.body.precio)} `)
}
const queryUpdate = `UPDATE productos SET ${modificaciones.join(", ")} WHERE id=${peticion.params.id}`
```

De esa manera solo se actualizan los campos que vienen con valores.

Luego se coloca está lógica dentro de la función asociada a la ruta.


```Javascript
aplicacion.put('/api/productos/:id', function (peticion, respuesta) {
  pool.getConnection(function(err, connection) {
    const query = `SELECT * FROM productos WHERE id=${connection.escape(peticion.params.id)}`
    connection.query(query, function (error, filas, campos) {
      if(filas.length > 0){
        modificaciones = []
        if (peticion.body.nombre){
          modificaciones.push(` nombre=${connection.escape(peticion.body.nombre)} `)
        }
        if (peticion.body.cantidad){
          modificaciones.push(` cantidad=${connection.escape(peticion.body.cantidad)} `)
        }
        if (peticion.body.precio){
          modificaciones.push(` precio=${connection.escape(peticion.body.precio)} `)
        }
        const queryUpdate = `UPDATE productos SET ${modificaciones.join(", ")} WHERE id=${peticion.params.id}`
        connection.query(queryUpdate, function (error, filas, campos) {
          const queryConsulta = `SELECT * FROM productos WHERE id=${connection.escape(peticion.params.id)}`
          connection.query(queryConsulta, function (error, filas, campos) {
            respuesta.json({data: filas[0]})
          })
        })
      }
      else{
        respuesta.status(404)
        respuesta.send({errors: ["No se encuentra ese producto"]})
      }
    })
    connection.release()
  })
})
```
