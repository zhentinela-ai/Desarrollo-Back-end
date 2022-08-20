import express from "express";
import { pool } from "../db/index.js";
import { queries } from "./queries.js";

const router = express.Router();

router.get("/", (req, res) => {
  pool.getConnection((err, conenction) => {
    conenction.query(
      !req.query.order
        ? queries.getProducts
        : queries.getProductsOrderBy(req.query.order),
      (err, results) => {
        res.json({ data: results });
      }
    );
  });
});

router.get("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      queries.getProduct(req.params.id, connection),
      (err, result) => {
        if (result.length > 0) res.json({ data: result });
        else
          res.status(404).json({
            errors: [`No se existe el producto con el id ${req.params.id}`],
          });
      }
    );
  });
});

router.post("/", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      queries.createProduct(req.body, connection),
      (err, result) => {
        connection.query(queries.getProduct(result.insertId), (err, result) => {
          res.json({ data: result });
        });
      }
    );
    connection.release();
  });
});

router.put("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query(
      queries.updateProduct(req.params.id, req.body, connection),
      (err, result) => {
        connection.query(
          queries.getProduct(req.params.id, connection),
          (err, result) => {
            res.json({ data: result });
          }
        );
      }
    );
  });
});

export default router;
