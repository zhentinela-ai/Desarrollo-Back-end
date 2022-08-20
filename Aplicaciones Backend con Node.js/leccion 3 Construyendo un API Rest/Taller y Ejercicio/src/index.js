import express from "express";
import path from "path";
import bodyParser from "body-parser";

import indexRoute from "./routes/index.js";
import createProduct from "./routes/createProduct.js";
import deleteProduct from "./routes/deleteProduct.js";
import API from "./api/api.js";

const app = express();

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRoute);
app.use(createProduct);
app.use(deleteProduct);
app.use("/api/productos", API);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
