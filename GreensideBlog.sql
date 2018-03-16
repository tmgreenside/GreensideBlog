DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Accounts;
DROP TABLE IF EXISTS BloggerKeys;

 CREATE TABLE Posts (
	postID INT PRIMARY KEY AUTO_INCREMENT,
	postContent MEDIUMTEXT,
	postDate DATETIME,
	postUsername VARCHAR(50)
);

CREATE TABLE BloggerKeys (
	acctKey VARCHAR(10) PRIMARY KEY,
	used TINYINT
);

CREATE TABLE Accounts (
	acctKey VARCHAR(10),
	username VARCHAR(50),
	password VARCHAR(25),
	FOREIGN KEY (acctKey) REFERENCES BloggerKeys (acctKey)
);