var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world!');
});

app.get('/test', function(req, res){
	res.send('You went to test!');
});

app.listen(3000);