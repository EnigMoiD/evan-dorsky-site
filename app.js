var
// Using express for webapp
express = require('express'),
// And the express webapp
app = express(),
// Using stylus for stylesheets
stylus = require('stylus'),
// And nib like bourbon
nib = require('nib'),
// Poet for blog
Poet = require('poet');

var poet = Poet(app, {
	posts: __dirname + '/posts',
	postsPerPage: 5,
	metaFormat: 'json'
});

poet.init(function() {
	// Nothing yet!
});

// Setting up directories
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Using jade for backend templates
app.set('view engine', 'jade');

// Setting up stylus
function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib());
}
// app.use(stylus.middleware(
// {
// 	src: __dirname + '/public', 
// 	compile: compile
// }
// )
// );

app.use(app.router);

app.get('/', function (req, res) {
	res.render('index',
		{ title : 'Home' }
		)
});

app.listen(3000);