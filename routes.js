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

// send 404 response:
function send404Response(res){
    res.render('error.html');
};

module.exports = function(app) {
	
    app.use('/static', express.static('./static'));
    app.get('/', function (req, res) {
        res.render('home.html');
    });

    app.get('/blog', function (req, res) {
        res.render('blog.html');
    });
    app.post('/blog', function (req, res) {
        res.send("You blogged. Congratulations. Now replace this with an actual webpage.");
    });
}