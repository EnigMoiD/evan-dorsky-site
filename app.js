// Using express for webapp
var express = require('express'),
// Using stylus for stylesheets
stylus = require('stylus'),
// And nib like bourbon
nib = require('nib');

// Instantiating app
var app = express();

// Setting up app
app.use(express.logger('dev'));

// Setting up directories
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

// Using jade for backend templates
app.set('view engine', 'jade');

// Setting up stylus
function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib());
}
app.use(stylus.middleware(
{
	src: __dirname + '/static', 
	compile: compile
}
)
);

app.get('/', function (req, res) {
	res.render('index',
		{ title : 'Home' }
		)
})

app.listen(3000);