var express = require("express");
var app = express();
const records = require("./records.js");

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to movies API");
});

app.get("/movies", async (req, res) => {
  const movies = await records.getMoviesList()
  res.send(movies);
})

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id
  const movies = await records.getMovieById(id);
  res.send(movies)
})

app.post('/movies', async (req, res) => {
  const newMovie = req.body
  const added = await records.createMovie(newMovie);
  res.send(added)
})

app.put("/movies/:id", async (req, res) => {
  const newMovie = req.body
  const id = req.params.id
  const added = await records.updateMovie(id, newMovie);
  res.send(added)
})



app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
