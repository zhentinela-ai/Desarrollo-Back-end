const express = require("express");
const aplicacion = express();
const mysql = require("mysql");

require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "blog",
});

aplicacion.set("view engine", "ejs");

aplicacion.get("/noticias", function (peticion, respuesta) {
  pool.getConnection(function (err, connection) {
    const query = `SELECT * FROM noticias WHERE autor = ${connection.escape(
      peticion.query.autor
    )}`;

    connection.query(query, function (error, filas, campos) {
      console.log(filas);
      respuesta.render("index", { noticias: filas });
    });

    connection.release();
  });
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
