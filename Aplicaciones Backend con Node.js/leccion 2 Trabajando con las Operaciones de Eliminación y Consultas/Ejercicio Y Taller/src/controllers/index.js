import { pool } from "../db/index.js";

export const getProducts = async (req, res) => {
  pool.getConnection((err, connection) => {
    console.log(
      "Connected to database:",
      pool.config.connectionConfig.database
    );

    try {
      var query = "";
      if (req.query.orderBy !== undefined)
        query = `SELECT * FROM productos ORDER BY ${req.query.orderBy}`;
      else query = `SELECT * FROM productos`;

      connection.query(query, (_, results) => {
        res.render("index", { products: results });
      });
      connection.release();
    } catch (error) {
      console.log(error.message);
    }
  });
};
