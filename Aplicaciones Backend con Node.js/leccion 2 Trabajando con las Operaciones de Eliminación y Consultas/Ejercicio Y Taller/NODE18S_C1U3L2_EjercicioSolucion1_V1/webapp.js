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

aplicacion.set('view engine', 'ejs')
aplicacion.use(bodyParser.json())
aplicacion.use(bodyParser.urlencoded({ extended: true }))
aplicacion.use(express.static('public'))

aplicacion.get('/', function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    let query = `SELECT * FROM productos ORDER BY nombre`
    if (peticion.query.orden == "precio"){
      query = `SELECT * FROM productos ORDER BY precio`
    }
    else if (peticion.query.orden == "cantidad"){
      query = `SELECT * FROM productos ORDER BY cantidad`
    }
    else if (peticion.query.orden == "id"){
      query = `SELECT * FROM productos ORDER BY id`
    }
    connection.query(query, function (error, filas, campos) {
      respuesta.render('index', { productos: filas })
    })
    connection.release()
  })
})

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

aplicacion.get('/eliminar', function (peticion, respuesta) {
  pool.getConnection(function(err, connection) {
    const query = `DELETE FROM productos WHERE id=${connection.escape(peticion.query.id)}`
    connection.query(query, function (error, filas, campos) {
      respuesta.redirect("/")
    })
    connection.release()
  })
})

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado")
})
