var mysql = require('mysql');

var dbConfig = {
    server: 'localhost',
    database: 'GreensideBlog',
    user: 'trevapp',
    password: 'bowers321',
    port: 3306,
    multipleStatements: false // prevent certain types of SQL injection
};

var con = mysql.createConnection(dbConfig);

exports.blogPost = function (req, res) {

    var username = req.body.username;
    var passenter = req.body.userpass;
    // attempting to block SQL injection with prepared statement
    authenticator = "SELECT * FROM Accounts WHERE username = ? AND password = ?";
    con.query(authenticator, [username, passenter], function (err, result) {
        if (err || result.length === 0)
            res.redirect('/error');
        else {
            testquery = "INSERT INTO Posts (postContent, postDate, postUsername) VALUES (?, NOW(), ?)";
            con.query(testquery, [req.body.blogger, username], function (err, result) {
                res.redirect('/blog');
            });
        }
    });
};

exports.loadBlog = function (req, res) {
    con.query("SELECT postContent, postDate FROM Posts", function (err, result) {
        res.render('blog.html', {results: result});
    });
};

exports.createAcct = function (req, res) {
    res.render('createBlogAcct.html');
};

exports.saveAcct = function (req, res) {

    if (req.body.userpass !== req.body.userpass2) {
        res.redirect('/error');
        return;
    } else if (req.body.username === "") {
        res.redirect('/error');
        return;
    }

    con.query("SELECT * FROM BloggerKeys WHERE acctKey = '" + req.body.acctKey + "'", function (err, result) {
        if (err || result.length === 0) {
            res.redirect('/error');
            return;
        }
    });

    insertQuery = "INSERT INTO Accounts (username, password, acctKey) VALUES (";
    insertQuery += "'" + req.body.username + "', '" + req.body.userpass + "', '" + req.body.acctKey + "')";
    con.query(insertQuery, function (err, result) {
        if (err)
            res.redirect('/error');
        else
            res.redirect('/blog');
    });

};