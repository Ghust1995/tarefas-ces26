var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(cookieParser());

app.get('/cookies', function(req, res) {
    console.log('Cookies: ', req.cookies);
    res.send(JSON.stringify(req.cookies));
});

app.post('/save', function(req, res) {
    var rawSaves = fs.readFileSync('./saves.json', 'utf8');
    var saves = JSON.parse(rawSaves);
    console.log(req.body);
    saves[req.body.hash] = req.body.data;
    console.log(saves);
    rawSaves = JSON.stringify(saves);
    console.log(rawSaves);
    fs.writeFileSync('./saves.json', rawSaves);
    res.send(200);
});

app.get('/load/:id', function(req, res) {
  var rawSaves = fs.readFileSync('./saves.json', 'utf8');
  var saves = JSON.parse(rawSaves);
  var saveObj = saves[req.params.id];
  res.send(JSON.stringify(saveObj));
});

app.listen(8080);
