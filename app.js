/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// Example route
// var user = require('./routes/user');

// Routes to Main Pages
var index = require('./routes/index');
var home = require('./routes/home');
var education = require("./routes/education");
var investing = require("./routes/investing");
var profile = require("./routes/profile");
var support = require("./routes/support");
// Routes to Side Pages
var lesson_1_graph = require("./routes/lesson-1-graph");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Example route
// app.get('/users', user.list);

// Routes to Main Pages
app.get('/', index.view);
app.get('/home', home.view);
app.get('/education', education.view);
app.get('/investing', investing.view);
app.get('/profile', profile.view);
app.get('/support', support.view);
// Routes for Side Pages
app.get('/lesson-1-graph', lesson_1_graph.view);
//Routes for JSON
app.get('/:name', index.view);
app.get('/investing:stockOne', investing.view);
app.get('/investing:stockTwo', investing.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
