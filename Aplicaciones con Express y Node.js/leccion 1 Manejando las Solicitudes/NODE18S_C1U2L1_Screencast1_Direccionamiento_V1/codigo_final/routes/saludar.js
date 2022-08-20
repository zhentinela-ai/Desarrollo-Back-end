const express = require('express');
const router = express.Router()

router.get('/hola', function(req, res) {
  res.send('Hola');
});

router.get('/hi', function(req, res) {
  res.send('Hi');
});

router.post('/hi', function(req, res) {
  res.send('POST: Hi');
});

router.all('/hello', function(req, res) {
  res.send('Hello');
});

module.exports = router;
