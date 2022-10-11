const port = 3000;

var express = require("express");

var app = express();

var anime = require("./getCoolAnime.js");

app.use(express.static('public'));

app.get('/Anime', function (req, res) {
  res.sendFile(__dirname + "/Anime.html")
});

app.get('/api/animeGet/:id', function(req, res) {
  res.json(anime.getAnime(req.params['id']));
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.listen(port, function () {
  console.log(`Now listening on port ${port}!`);
});

