import { pool } from "../db/index.js";

export const createProductForm = (req, res) => {
  res.render("createProduct");
};

export const createProduct = (req, res) => {
  pool.getConnection((err, connection) => {
    try {
      connection.query("INSERT INTO productos SET ?", {
        nombre: req.body.nombre,
        cantidad: parseInt(req.body.cantidad),
        precio: parseFloat(req.body.precio),
      });
      res.redirect("/");
    } catch (error) {
      console.error(error.message);
    }
  });
};
