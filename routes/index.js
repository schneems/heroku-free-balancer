'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var date = new Date();
	if (date.getHours() >= 6) { // from 6am to 12pm redirect to first worker
		console.log('Redirect to: "http://a-i-t-1.herokuapp.com"');
		res.redirect(302, 'http://a-i-t-1.herokuapp.com');
	} else { // from 12am to 5:59am redirect to secondary worker
		console.log('Redirect to: "http://a-i-t-2.herokuapp.com"');
		res.redirect(302, 'http://a-i-t-2.herokuapp.com');
	}
});

module.exports = router;
