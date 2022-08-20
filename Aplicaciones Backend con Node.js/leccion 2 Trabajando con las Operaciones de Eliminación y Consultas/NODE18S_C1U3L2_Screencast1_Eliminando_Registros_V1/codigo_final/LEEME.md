```Javascript

<li>
  <a href="/actualizar-formulario?id=<%=tareas[i].id%>"><%=tareas[i].descripcion%></a> 
  [<a href="/eliminar-tarea?id=<%=tareas[i].id%>">x</a>]
</li>

[<a href="/eliminar-tarea?id=<%=tareas[i].id%>" onclick="return confirm('¿Está seguro de eliminar esta tarea?')">x</a>]

aplicacion.get('/eliminar-tarea', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

  

  })

})

  const query = `DELETE FROM tareas WHERE id=${connection.escape(peticion.query.id)}`
  


    connection.query(query, function (error, filas, campos) {
      respuesta.redirect("/")
    })
    connection.release()


const query = `DELETE FROM tareas WHERE id='${peticion.query.id}'`

console.log('query: ', query);

// comentar 

http://localhost:8080/eliminar-tarea?id=1' OR true -- 

// ver el query


const query = `DELETE FROM tareas WHERE id=${connection.escape(peticion.query.id)}`

// ver el query

aplicacion.get('/eliminar-tarea', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

    const query = `DELETE FROM tareas WHERE id=${connection.escape(peticion.query.id)}`
    connection.query(query, function (error, filas, campos) {
      respuesta.redirect("/")
    })
    connection.release()

  })

})

 
```



