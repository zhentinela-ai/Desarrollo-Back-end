import { pool } from "../db/index.js";

export const deleteProduct = (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(`DELETE FROM productos WHERE id=${req.query.id}`)
    res.redirect("/");
  });
};
