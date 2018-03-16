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

    app.get('/about', function (req, res) {
        res.render('about.html');
    });

    app.get('/resume', function (req, res) {
        res.render('resume.html');
    });

    app.get('/blog', blog.loadBlog);
    app.post('/blog', blog.blogPost);

    app.get('/blog/createAcct', blog.createAcct);
    app.post('/blog/createAcct', blog.saveAcct);

    app.get('/*', function (req, res) {
        res.render('error.html');
    });
}

