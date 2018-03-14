var mysql = require('mysql');

var dbConfig = {
    server:'localhost',
    database:'GreensideBlog',
    user:'trevapp',
    password:'bowers321',
    port:3306,
    multipleStatements: false // prevent certain types of SQL injection
};

const con = mysql.createConnection(dbConfig);

exports.blogPost = function(req, res) {

	testquery = "INSERT INTO Posts (postContent) VALUES(" + req.body.blogger + ")"; // !!!! Create new database for this
	con.query(testquery, function(err, result) {
		res.redirect('/blog');
	});

}