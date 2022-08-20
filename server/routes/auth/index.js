const express = require("express");
const router = express.Router();
const { connection } = require("../../config/db")

router.post('/register', (req, res) => {
  let {username,password} = req.body;
  let statement = `INSERT INTO user (username, password)
  VALUES ('${username}', '${password}');`;
  connection.execute(statement, function (error, results ) {
    if (error) throw error;
    if (results.affectedRows === 1) {
      return res.status(200).json({id:results.insertId,message:'ok'})
    } else {
      return res.status(400).send("error occured")
    }
  });
});

router.get('/login', (req, res) => {
    let {username,password} = req.body;
    let statement = `SELECT * FROM user WHERE username = '${username}' and password='${password}'`;
    connection.execute(statement, function (error, results ) {
      if (error) throw error;
      if(results.length === 0) {
        return res.status(400).send("user not found")
      } else {
        return res.status(400).json(results[0])
      }
    });
});

module.exports = router;