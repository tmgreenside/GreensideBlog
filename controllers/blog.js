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

	testquery = "INSERT INTO Posts (postContent, postDate) VALUES ('" + req.body.blogger + "', NOW())";
	console.log(req.body.blogger);
	con.query(testquery, function(err, result) {
		res.redirect('/blog');
	});
}

exports.loadBlog = function(req, res) {
	con.query("SELECT postContent, postDate FROM Posts", function(err, result) {
		res.render('blog.html', {results: result});
	});
}