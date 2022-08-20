```Javascript

aplicacion.post('/api/tareas/', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {


  })

})


    const query = `INSERT INTO tareas (descripcion) VALUES (${connection.escape(peticion.body.descripcion)})`
    connection.query(query, function (error, filas, campos) {


    })
    connection.release()


      const nuevoId = filas.insertId

      const queryConsulta = `SELECT * FROM tareas WHERE id=${connection.escape(nuevoId)}`
      
      connection.query(queryConsulta, function (error, filas, campos) {
        
      })

      respuesta.status(201)
      respuesta.json({data: filas[0]})


> curl -X POST -H "Content-Type: application/json" -d '{"descripcion": "Nueva tarea" }' http://localhost:8080/api/tareas

```
