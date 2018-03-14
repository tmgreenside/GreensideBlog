var crypto = require('crypto');
var express = require('express');

var blog = require('./controllers/blog');

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
    app.post('/blog', blog.blogPost);

}

