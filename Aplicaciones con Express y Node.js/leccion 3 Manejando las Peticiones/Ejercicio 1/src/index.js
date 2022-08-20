const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// La validación debe ser del lado del servidor no del cliente
app.post("/signin", (req, res) => {
  res.send(`Bienvenido ${req.body.email}, ${req.body.usermane}`);
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "\\views" });
});

app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});
