const express = require('express')
const aplicacion = express()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123123',
  database : 'blog'
});

connection.connect()

aplicacion.set('view engine','ejs')

aplicacion.get('/', function(peticion, respuesta) {
  connection.query('SELECT COUNT(*) as cuenta FROM noticias', function (error, filas, campos) {
    respuesta.render('index', {total: filas[0].cuenta})
  })
})

aplicacion.listen(8080, function(){
  console.log("Servidor iniciado")
})
