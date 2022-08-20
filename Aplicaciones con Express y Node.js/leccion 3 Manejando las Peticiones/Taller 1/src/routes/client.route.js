const express = require("express");
const app = express();
const router = express.Router();

router.get("/client/:id_client", (req, res) => {
  res.send(`Bienvenido cliente: ${req.params.id_client}`);
});

module.exports = router;
