import { createPool } from "mysql";

import "../config.js";

export const pool = createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "tienda",
});

export const getProducts = async (req, res) => {
  pool.getConnection((err, connection) => {
    console.log(
      "Connected to database:",
      pool.config.connectionConfig.database
    );

    try {
      connection.query("SELECT * FROM productos", (_, results) => {
        res.render("index", { products: results });
      });
      connection.release();
    } catch (error) {
      console.log(error.message);
    }
  });
};
