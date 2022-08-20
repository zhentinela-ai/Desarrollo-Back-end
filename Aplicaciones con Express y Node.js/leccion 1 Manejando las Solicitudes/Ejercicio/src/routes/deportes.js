const express = require("express");
const router = express.Router();

router.get("/futbol", (req, res) => {
  res.send("Informacion sobre futbol");
});

router.get("/baloncesto", (req, res) => {
  res.send("Informacion sobre baloncesto");
});

module.exports = router;