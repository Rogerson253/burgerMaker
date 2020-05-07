// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection(
  process.env.JAWS_DBURL || {
  host: process.env.HOST,
  port: 3306,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
