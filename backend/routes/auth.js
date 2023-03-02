const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require('./../connection.js');

router.use(bodyParser.json());

router.post('/login', (req, res) => {
    const query = "SELECT * FROM User where username="+req.body.username+"";
    connection.query(query, (error, results, fields) => {
    if (error) throw error;
    if(req.body.username==results[0].username && req.body.password==results[0].password){
        console.log("hogyaaa");
        res.send({
            message: 'Login Successful',
            user: results[0]
        });
    }
  });
  });
router.get('/login', (req, res) => {
    const query = "SELECT * FROM User";
    connection.query(query, (error, results, fields) => {
        res.json(results);
}
    )});
  
  router.post('/signup', (req, res) => {
    // handle user signup
  });

  module.exports = router;