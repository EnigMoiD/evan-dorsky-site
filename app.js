var express = require('express');
var app = express();

// Using jade for templates
app.engine('jade', require('jade').__express);

// Using sass for stylesheets
var sass = require('node-sass');


app.get('/', function(req, res){
	res.send('hello world!');
});

app.get('/test', function(req, res){
	res.send('You went to test!');
});

app.listen(3000);