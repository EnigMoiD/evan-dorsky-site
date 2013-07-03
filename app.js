// Using express for webapp
var express = require('express'),
// Using sass for stylesheets
sass = require('node-sass');

var app = express();

// Using jade for backend templates
app.set('view engine', 'jade');

// Setting up directories
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	res.render('index',
		{ title : 'Home' }
		)
})

app.listen(3000);