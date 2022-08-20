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

aplicacion.set("view engine", "ejs");
aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: true }));

aplicacion.get("/", function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    console.log(
      "Conexión establecida con la base de datos",
      pool.config.connectionConfig.database
    );

    const query = `SELECT * FROM tareas`;
    connection.query(query, function (error, filas, campos) {
      respuesta.render("index", { tareas: filas });
    });
    connection.release();
  });
});

aplicacion.post("/agregar-tarea", (peticion, respuesta) => {
  pool.getConnection((err, connection) => {
    const query = `INSERT INTO tareas (descripcion) VALUES (${connection.escape(
      peticion.body.descripcion
    )})`;
    connection.query(query, (error, filas, campos) => {
      respuesta.redirect("/");
    });
    connection.release();
  });
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado on port 8080");
});
