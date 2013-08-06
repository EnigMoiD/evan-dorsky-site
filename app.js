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

app.set('views', __dirname + '/views');

app.configure(function() {
	app.use(stylus.middleware({
			src: __dirname + '/views', 
			dest: __dirname + '/public', 
			compile: compile,
			force: true
		})
	);	
	app.use(express.static(__dirname + '/public'));
})


// Using jade for backend templates
app.set('view engine', 'jade');

// Setting up stylus
function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib());
}

poet.addRoute('/category/:category', function (req, res) {
  var categorizedPosts = poet.helpers.postsWithCategory(req.params.category);
  if (categorizedPosts.length) {
    res.render(""+req.params.category, {
      posts: categorizedPosts,
      category: req.params.category
    });
  }
});

poet.addRoute('/tag/:tag', function (req, res) {
  var taggedPosts = poet.helpers.postsWithTag(req.params.tag);
  if (taggedPosts.length) {
    res.render('tag', {
      posts: taggedPosts,
      highlightTag: req.params.tag
    });
  }
});

app.get('/', function (req, res) {
	res.render('index', {
		title : 'Home'
	})
});

app.get('/posts', function (req, res) {
	res.render('posts', {
		title : 'Blog'
	})
});

app.listen(8080);

console.log('> running on port 8080');