const express = require("express");
const router = express();

router.use("/", (req, res, next) => {
  console.log(
    `${new Date()} ${req.method} ${req.url} ${req.socket.remoteAddress} ${
      req.headers["user-agent"]
    }`
  );
  next();
});

module.exports = router;
