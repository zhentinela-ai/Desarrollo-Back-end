const express = require('express')
const aplicacion = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

var pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'inventario'
})

aplicacion.use(bodyParser.json())
aplicacion.use(bodyParser.urlencoded({ extended: true }))

aplicacion.get('/api/productos', function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    const query = `SELECT * FROM productos`
    connection.query(query, function (error, filas, campos) {
      respuesta.json({ data: filas })
    })
    connection.release()
  })
})

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado")
})
