'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var config = require(path.join(__dirname, 'config.json'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env || 'development';

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // jshint ignore: line

// catch 404 and forward to error handler
app.use(function(req, res) {
	var date = new Date();
	if (date.getHours() >= 12) {
		res.redirect(302, config.server1 + req.url);
	} else {
		res.redirect(302, config.server2 + req.url);
	}
});

module.exports = app;
