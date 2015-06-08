'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var SERVER_1 = 'http://a-i-t-1.herokuapp.com';
var SERVER_2 = 'http://a-i-t-2.herokuapp.com';

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
        res.redirect(302, SERVER_1 + req.url);
    } else {
        res.redirect(302, SERVER_2 + req.url);
    }
});

module.exports = app;
