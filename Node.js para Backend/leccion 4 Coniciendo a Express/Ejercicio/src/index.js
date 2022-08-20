const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const saludos = Math.random();

  if (saludos <= 0.5) {
    res.send("¡Bienvenido!");
  } else {
    res.send("¡Hola!");
  }
});
app.get("/despedida", (req, res) => {
  const despedida = Math.random();

  if (despedida <= 1 / 3) {
    res.send("¡Chao!");
  } else if ((despedida <= 2 / 3) & (despedida > 1 / 3)) {
    res.send("¡Adios!");
  } else {
    res.send("¡Nos vemos!");
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
