var express = require("express");
var app = express();
const records = require("./records.js");

app.get("/", (req, res) => {
  res.send("Welcome to movies API");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
