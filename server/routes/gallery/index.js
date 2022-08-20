const express = require("express");
const router = express.Router();
const { connection } = require("../../config/db")

router.post('/add', (req, res) => {
  let {name, description,imageUrl} = req.body;
  let statement = `INSERT INTO gallery (name, description,imageUrl)
  VALUES ('${name}', '${description}','${imageUrl}');`;
  connection.execute(statement, function (error, results ) {
    if (error) throw error;
    if (results.affectedRows === 1) {
      return res.status(200).json({id:results.insertId,message:'ok'})
    } else {
      return res.status(400).send("error occured")
    }
  });
});

router.get('/get', (req, res) => {
    let { pageSize, pageNO } = req.query;
    const offSet = pageNO*pageSize
    let statement = `SELECT * FROM gallery  LIMIT ${offSet} offset ${pageSize} `;
    connection.execute(statement, function (error, results ) {
      if (error) throw error;
      if(results.length === 0) {
        return res.status(400).send("object not found")
      } else {
        return res.status(400).json(results)
      }
    });
});

router.post('/put', (req, res) => {
    let {name, description,imageUrl,id} = req.body;
    let statement = `UPDATE  gallery set name='${name}', description='${description}',imageUrl='${imageUrl}'
    where id = ${id} ;`;
    connection.execute(statement, function (error, results ) {
        if (error) throw error;
        console.log(results)
      if (results.serverStatus === 2) {
        return res.status(200).json({id:results.insertId,message:'ok'})
      } else {
        return res.status(400).send("id not matched")
      }
    });
  });

module.exports = router;