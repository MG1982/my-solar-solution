let mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "project2"
  });
}
connection.connect();
module.exports = connection;
