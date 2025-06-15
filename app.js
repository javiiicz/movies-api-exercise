var express = require("express");
var app = express();
const records = require("./records.js");

app.get("/", (req, res) => {
  res.send("Welcom to Movies API");
});

app.get("/movies", async (req, res) => {

});

app.get("/movies/:id", async (req, res) => {

});

app.post("/movies", async (req, res) => {

});

app.put("/movies/:id", async (req, res) => {

});

app.delete("/movies/:id", async (req, res) => {

});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
