const express = require('express')
const aplicacion = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

var pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'tareas_app'
})

aplicacion.use(bodyParser.json())
aplicacion.use(bodyParser.urlencoded({ extended: true }))

aplicacion.get('/api/tareas', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

    const query = `SELECT * FROM tareas`
    connection.query(query, function (error, filas, campos) {
      respuesta.json({data: filas})
    })
    connection.release()

  })

})

aplicacion.get('/api/tareas/:id', function (peticion, respuesta) {

  pool.getConnection(function(err, connection) {

    const query = `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`
    connection.query(query, function (error, filas, campos) {
      if (filas.length > 0){
        respuesta.json({data: filas[0]})
      }
      else{
        respuesta.status(404)
        respuesta.send({errors: ["No se encuentra esa tarea"]})
      }

    })
    connection.release()

  })

})

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado")
})
