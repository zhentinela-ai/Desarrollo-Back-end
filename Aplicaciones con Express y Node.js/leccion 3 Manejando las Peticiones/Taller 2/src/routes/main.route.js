const express = require("express");
const router = express.Router();

const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/", (req, res) => {
  res.cookie("nombre", req.query.nombre)
  res.redirect("/read");
  // res.send("Bienvenido" + req.cookies['nombre']);
})

module.exports = router;