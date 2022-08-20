```Javascript

aplicacion.get('/hola', function(req, res) {
  res.send('Hola')
})

aplicacion.get(/^\/desped/, function(req, res) {
  res.send('Adios')
})

// ----- routes/saludar.js
const express = require('express')
const router = express.Router()

router.get('/hola', function(req, res) {
  res.send('Hola')
})

router.get('/hi', function(req, res) {
  res.send('Hi')
})

module.exports = router

const rutasSaludar = require('./routes/saludar')

aplicacion.use('/saludar', rutasSaludar)

router.post('/hi', function(req, res) {
  res.send('POST: Hi')
})

> curl -X POST http://localhost:8080/saludar/hi
> curl -X POST http://localhost:8080/saludar/hi

router.all('/hello', function(req, res) {
  res.send('Hello')
})

> curl -X GET http://localhost:8080/saludar/hello


```

