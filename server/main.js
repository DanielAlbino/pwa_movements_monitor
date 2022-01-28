const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

app.get("/api", routes);

app.listen(5000, () => {
  console.log("listen on port 5000");
});
