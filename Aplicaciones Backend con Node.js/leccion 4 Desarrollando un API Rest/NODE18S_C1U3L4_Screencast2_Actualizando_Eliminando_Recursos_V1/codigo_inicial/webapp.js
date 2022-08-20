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
  pool.getConnection(function (err, connection) {
    const query = `SELECT * FROM tareas`;
    connection.query(query, function (error, filas, campos) {
      respuesta.json({ data: filas });
    });
    connection.release();
  });
});

aplicacion.get("/api/tareas/:id", function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    const query = `SELECT * FROM tareas WHERE id=${connection.escape(
      peticion.params.id
    )}`;
    connection.query(query, function (error, filas, campos) {
      if (filas.length > 0) {
        respuesta.json({ data: filas[0] });
      } else {
        respuesta.status(404);
        respuesta.send({ errors: ["No se encuentra esa tarea"] });
      }
    });
    connection.release();
  });
});

aplicacion.post("/api/tareas/", function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    const query = `INSERT INTO tareas (descripcion) VALUES (${connection.escape(
      peticion.body.descripcion
    )})`;
    connection.query(query, function (error, filas, campos) {
      const nuevoId = filas.insertId;
      const queryConsulta = `SELECT * FROM tareas WHERE id=${connection.escape(
        nuevoId
      )}`;
      connection.query(queryConsulta, function (error, filas, campos) {
        respuesta.status(201);
        respuesta.json({ data: filas[0] });
      });
    });
    connection.release();
  });
});

aplicacion.put("/api/tareas/:id", (peticion, respuesta) => {
  pool.getConnection((err, connection) => {
    const query = `SELECT * FROM tareas WHERE id=${connection.escape(
      peticion.params.id
    )}`;
    connection.query(query, (err, filas, campos) => {
      if (filas.length > 0) {
        const queryUpdate = `UPDATE tareas SET descripcion=${connection.escape(
          peticion.body.descripcion
        )} WHERE id=${peticion.params.id}`;
        connection.query(queryUpdate, (err, filas, campos) => {
          const queryConsulta = `SELECT * FROM tareas WHERE id=${connection.escape(
            peticion.params.id
          )}`;
          connection.query(queryConsulta, (err, filas, campos) => {
            respuesta.json({ data: filas[0] });
          });
        });
      } else {
        respuesta.status(404);
        respuesta.send({ errors: ["No se encuentra esa tarea"] });
      }
    });
    connection.release();
  });
});

aplicacion.delete("/api/tareas/:id", (peticion, respuesta) => {
  pool.getConnection((err, connection) => {
    const query = `SELECT * FROM tareas WHERE id=${connection.escape(
      peticion.params.id
    )}`;
    connection.query(query, (err, filas, campos) => {
      if (filas.length > 0) {
        const queryDelete = `DELETE FROM tareas WHERE id=${peticion.params.id}`;
        connection.query(queryDelete, (err, filas, campos) => {
          respuesta.status(204).json()
        });
      } else {
        respuesta.status(404);
        respuesta.send({ errors: ["No se encuentra esa tarea"] });
      }
    });
    connection.release();
  });
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
