import express from "express";

import {
  createProduct,
  createProductForm,
} from "../controllers/createProduct.js";

const router = express.Router();

router.get("/create-form", createProductForm);

router.post("/create-product", createProduct);

export default router;
