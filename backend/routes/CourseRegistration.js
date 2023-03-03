const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require('../requires/connection.js');

router.use(bodyParser.json());

router.post('/', (req, res) => {
    const username = req.body.username;
    connection.query("select degree from Student where student_id=?", [username],
    (err, result) => {
      if (err) {
        res.send({ err: err });
          }

      if (result.length > 0 && result[0].username === username && result[0].password === password) {
        res.send({
          status: 200,
          navigation: "/dashboard",
        });
      } else {
        res.send({
          status: 404,
          message: "Invalid Credentials"
        });
      }
    }
  );
});
router.get('/login', (req, res) => {

  console.log("GET Api recieved!")
  const query = "SELECT * FROM User";
  connection.query(query, (error, results, fields) => {
    res.json(results);
  }
  )
});

router.post('/signup', (req, res) => {
  // handle user signup
});

module.exports = router;