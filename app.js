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
	postsPerPage: 3,
	metaFormat: 'json'
});

poet.init();

// Setting up directories
app.set('views', __dirname + '/views');
app.use('/img', express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/public'));

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
	src: __dirname + '/public', 
	compile: compile
}
)
);

// app.use(app.router);

poet.addRoute('/category/:category', function (req, res) {
  var categorizedPosts = poet.helpers.postsWithCategory(req.params.category);
  if (categorizedPosts.length) {
    res.render(""+req.params.category, {
      posts: categorizedPosts,
      category: req.params.category
    });
  }
});

app.get('/', function (req, res) {
	res.render('index',
		{ title : 'Home' }
		)
});

app.get('/posts', function (req, res) {
	res.render('posts',
		{ title : 'Blog' }
		)
});

app.listen(3000);