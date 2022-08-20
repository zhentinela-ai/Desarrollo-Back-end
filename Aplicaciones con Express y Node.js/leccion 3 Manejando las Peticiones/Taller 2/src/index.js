const express = require("express");
const app = express();

app.use(require("./routes/main.route"));
app.use(require("./routes/read.route"));

app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});
