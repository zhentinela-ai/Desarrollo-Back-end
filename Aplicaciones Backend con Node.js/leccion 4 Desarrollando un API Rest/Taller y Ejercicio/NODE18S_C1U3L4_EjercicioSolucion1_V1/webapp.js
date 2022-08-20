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
    let query = `SELECT * FROM productos ORDER BY nombre`
    if (peticion.query.orden == "precio") {
      query = `SELECT * FROM productos ORDER BY precio`
    }
    else if (peticion.query.orden == "cantidad") {
      query = `SELECT * FROM productos ORDER BY cantidad`
    }
    else if (peticion.query.orden == "id") {
      query = `SELECT * FROM productos ORDER BY id`
    }
    connection.query(query, function (error, filas, campos) {
      respuesta.json({ data: filas })
    })
    connection.release()
  })
})

aplicacion.get('/api/productos/:id', function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    const query = `SELECT * FROM productos WHERE id=${connection.escape(peticion.params.id)}`
    connection.query(query, function (error, filas, campos) {
      if (filas.length == 0) {
        respuesta.status(404)
        respuesta.json({ errors: ["Producto no encontrado"] })
      }
      else {
        respuesta.json({ data: filas[0] })
      }
    })
    connection.release()
  })
})

aplicacion.post('/api/productos', function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {

    errores = []

    if (!peticion.body.nombre || peticion.body.nombre == "") {
      errores.push("Nombre inválido")
    }
    if (!peticion.body.cantidad || peticion.body.cantidad == "") {
      errores.push("Cantidad inválida")
    }
    if (!peticion.body.precio || peticion.body.precio == "") {
      errores.push("Precio inválido")
    }

    if (errores.length > 0) {
      respuesta.status(400)
      respuesta.json({ errors: errores })
    }
    else {
      const query = `
      INSERT
      INTO productos
      (nombre, precio, cantidad)
      VALUES
      (
        ${connection.escape(peticion.body.nombre)},
        ${connection.escape(peticion.body.precio)},
        ${connection.escape(peticion.body.cantidad)}
      )
    `

      connection.query(query, function (error, filas, campos) {
        const nuevoId = filas.insertId
        const queryConsulta = `SELECT * FROM productos WHERE id=${connection.escape(nuevoId)}`
        connection.query(queryConsulta, function (error, filas, campos) {
          respuesta.status(201)
          respuesta.json({ data: filas[0] })
        })
      })
    }
    connection.release()
  })
})


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
        respuesta.send({errors: ["No se encuentra esa producto"]})
      }
    })
    connection.release()
  })
})

aplicacion.listen(8080, function () {

})
