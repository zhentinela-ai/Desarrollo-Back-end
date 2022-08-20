const express = require("express");
const router = express.Router();

router.get("/client/:id_client/account/:id_account", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`Bienvenido a la cuenta: ${req.params.id_account} del cliente: ${req.params.id_client} (orden número: ${req.query.orden})`);
})

module.exports = router;