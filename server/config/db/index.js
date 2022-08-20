const mysql = require("mysql2");

// // create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "fypDB",
  password: "shayanFYP890",
});

var con = connection.connect((err) => {
  if (err) return console.log("cannot connect to db");
  connection.execute(
    `CREATE TABLE IF NOT EXISTS user( id INT AUTO_INCREMENT, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL,	PRIMARY KEY (id) ) `,
    (err, res) => {
      if (err) {
        console.log("user table not created");
      }
    }
  );
  connection.execute(
    `CREATE TABLE IF NOT EXISTS gallery( id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL,imageUrl VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL,	PRIMARY KEY (id) ) `,
    (err, res) => {
      if (err) {
        console.log("gallery table not created");
      }
    }
  );
  console.log("db connected");
});

module.exports = { con, connection };
