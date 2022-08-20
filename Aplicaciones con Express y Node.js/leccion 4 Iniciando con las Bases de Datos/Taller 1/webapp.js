const express = require("express");
const aplicacion = express();
const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "ejemplos",
});

connection.connect();

var pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "promociones",
});

aplicacion.set("view engine", "ejs");

aplicacion.get("/", function (peticion, respuesta) {
  pool.query(
    "SELECT COUNT(*) as cuenta FROM noticias",
    function (error, filas, campos) {
      respuesta.render("index", { total: filas[0].cuenta });
    }
  );
});

aplicacion.listen(8080, function () {
  console.log("Servidor iniciado");
});
