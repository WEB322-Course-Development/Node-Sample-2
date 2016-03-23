var express = require('express'),
    bodyParser = require('body-parser'),
	path = require('path'),
	exphbs = require('express-handlebars');
	
// set the port to use the default or 8080 if not set
var port = process.env.PORT || 8080;

// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all urlencoded routes (form submits)
app.use(bodyParser.urlencoded({ extended: true }));

// instruct the app to use the express.static middleware for all static files in the public directory
// (typically used for css, less, js files, etc)
app.use(express.static(path.join(__dirname, 'public')));

// instruct the app to use express handlebars for the view engine with the .hbs extension

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// set the "views" directory to be the "public" directory (good for this simple example)
app.set("views",__dirname+ '/public');

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
	res.render('index', {
		layout: false, 
	});
});

// This route receives the posted form.
// it returns the "index.hbs" file using the data specified in the render function
// since we're not using a master layout, we choose layout: false
app.post('/', function(req, res){
	
	var calculation;
	
	try{
		calculation = eval(req.body.calcDisplay);
	}catch(error){
		calculation = "Error";
	}

	res.render('index', {
		layout: false, 
		result: calculation
	});
});

app.listen(port);