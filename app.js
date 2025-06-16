var express = require("express");
var app = express();
const records = require("./records.js");

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
