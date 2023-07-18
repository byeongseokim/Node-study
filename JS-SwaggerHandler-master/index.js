const express = require("express");
const app = express();
const indexRouter = require("./router/index");

function init() {
  app.get("/", (req, res) => res.send("Welcome Swagger Hanlder"));
  indexRouter(app);

  app.listen(3000, () => console.log("server start port 3000"));
}

init();
