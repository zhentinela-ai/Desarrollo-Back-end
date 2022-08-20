const express = require("express");
const router = express.Router();

const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/read", (req, res) => {
  res.send(`Bienvenido: ${req.cookies['nombre']}`);
});

module.exports = router;
