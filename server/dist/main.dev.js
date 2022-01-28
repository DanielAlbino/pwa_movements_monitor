"use strict";

var express = require("express");

var app = express();
app.get("/", function () {
  console.log("Hello, Server!");
});
app.listen(5000, function () {
  console.log("listen on port 5000");
});