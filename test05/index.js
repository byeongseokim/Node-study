var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "test",
});

connection.connect();

connection.query("SELECT * from USER", function (error, results, fields) {
  if (error) throw error;
  console.log("users: ", results);
});

connection.end();
