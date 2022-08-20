import express from "express";
import path from "path";

import indexRoute from "./routes/index.js";

const app = express();

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.json());

app.use(indexRoute);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
