const express = require("express");
const app = express();

app.use(require("./middleware/llamadas"));

app.use("/", require("./routes/genereales"));

app.use("/conciertos", require("./routes/conciertos"));

app.use("/deportes", require("./routes/deportes"));

app.listen(3000, () => {
  console.log("Server on Port 3000");
});
