const express = require("express");
const router = express.Router();

router.get("/salsa", (req, res) => {
  res.send("Informacion sobre salsa");
});

router.get("/tango", (req, res) => {
  res.send("Información sobre Tango");
});

module.exports = router;
