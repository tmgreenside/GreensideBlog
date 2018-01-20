var crypto = require('crypto');
var express = require('express');
var sql = require('mysql');

var dbConfig = {
    server:'localhost',
    database:'tgreenside_DB',
    user:'trevapp',
    password:'bowers321',
    port:3306,
    multipleStatements: false // prevent certain types of SQL injection
};

// additional control and query functions
var controller = require('./controllers/controller');

// send 404 response:
function send404Response(res){
    res.render('error.html');
};

module.exports = function(app) {
	
    app.use('/static', express.static('./static'));
    app.get('/', function (req, res) {
        res.render('home.html', {results: null, attrs: [] });
    });
}