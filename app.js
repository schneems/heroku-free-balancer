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

	var route = req.url.slice(1);
	if (route.length === 0) {
		return res.sendStatus(401);
	}
	var pos = route.indexOf('/');
	var key = route.substr(0, (pos === -1) ? route.length : pos);

	if (!config.hasOwnProperty(key)) {
		return res.sendStatus(402);
	}

	var appConfig = config[key];
	var date = new Date();
	if (date.getHours() >= 12) {
		res.redirect(302, appConfig[0]);
	} else {
		res.redirect(302, appConfig[1]);
	}
});

module.exports = app;
