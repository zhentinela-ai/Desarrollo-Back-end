import express from "express";
import { deleteProduct } from "../controllers/deleteProduct.js";

const router = express.Router();

router.get("/eliminar-producto", deleteProduct);

export default router;
