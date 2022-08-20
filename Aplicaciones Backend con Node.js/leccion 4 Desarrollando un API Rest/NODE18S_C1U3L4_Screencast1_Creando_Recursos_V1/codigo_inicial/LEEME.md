```Javascript

aplicacion.get('/api/tareas', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

    

  })

})

    const query = `SELECT * FROM tareas`

    connection.query(query, function (error, filas, campos) {
      
    })
    connection.release()



    respuesta.json(filas)


    respuesta.json({data: filas})

  
aplicacion.get('/api/tareas/:id', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {



  })

})

    const query = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`


    connection.query(query, function (error, filas, campos) {
      

    })
    connection.release()


    if (filas.length > 0){
      respuesta.json({data: filas[0]})
    }


    else{
      
    }

    respuesta.status(404)
    
    respuesta.send({errors: ["No se encuentra esa tarea"]})

```
