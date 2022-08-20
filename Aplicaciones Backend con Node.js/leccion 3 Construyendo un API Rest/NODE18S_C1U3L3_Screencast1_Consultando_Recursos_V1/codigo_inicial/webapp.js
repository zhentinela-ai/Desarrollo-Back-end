const express = require("express");
const aplicacion = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

require("dotenv").config();

var pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "tareas_app",
});

aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: true }));

aplicacion.get("/api/tareas", function (peticion, respuesta) {
  pool.getConnection((err, connection) => {
    connection.query(`SELECT * FROM tareas`, (err, filas, campos) => {
      respuesta.json({ data: filas });
    });
    connection.release;
  });
});

aplicacion.get("/api/tareas/:id", function (peticion, respuesta) {
  pool.getConnection((err, connection) => {
    connection.query(
      `SELECT * FROM tareas WHERE id=${connection.escape(peticion.params.id)}`,
      (err, filas, campos) => {
        if (filas.length > 0) respuesta.json({ data: filas });
        else
          respuesta.status(404).send({ errors: ["No se encontro esa tarea"] });
      }
    );
    connection.release;
  });
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
