```Javascript

aplicacion.put('/api/tareas/:id', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

    

  })

})


const query = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`


    connection.query(query, function (error, filas, campos) {

    })
    connection.release()



if(filas.length > 0){
        

      }
      else{
        respuesta.status(404)
        respuesta.send({errors: ["No se encuentra esa tarea"]})
      }



const queryUpdate = `UPDATE tareas SET descripcion=${connection.escape(peticion.body.descripcion)} WHERE id=${peticion.params.id}`
        connection.query(queryUpdate, function (error, filas, campos) {

          

        })


const queryConsulta = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`
          connection.query(queryConsulta, function (error, filas, campos) {
            respuesta.json({data: filas[0]})
          })


> curl -X PUT -H "Content-Type: application/json" -d '{"descripcion": "Correr" }' http://localhost:8080/api/tareas/4
> curl -X PUT -H "Content-Type: application/json" -d '{"descripcion": "Correr" }' http://localhost:8080/api/tareas/42

// DELETE





aplicacion.delete('/api/tareas/:id', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

    const query = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`
    connection.query(query, function (error, filas, campos) {

      if(filas.length > 0){


      }
      else{
        respuesta.status(404)
        respuesta.send({errors: ["No se encuentra esa tarea"]})
      }

    })
    connection.release()

  })

})


        const queryDelete = `DELETE FROM tareas WHERE id=${peticion.params.id}`
        connection.query(queryDelete, function (error, filas, campos) {
          respuesta.status(204)
          respuesta.json()
        })


> curl -X DELETE -H "Content-Type: application/json" http://localhost:8080/api/tareas/4

```
