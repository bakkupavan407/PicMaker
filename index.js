var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname, ''));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(2016);
console.log('Server running at http://localhost:2016');