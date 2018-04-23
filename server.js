var express = require('express');
var fs = require('fs');
var url = require('url');

var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

require('./routes')(app);

// Start listening for requests
app.listen(8080);