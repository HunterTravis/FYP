const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../requires/connection.js");

router.use(bodyParser.json());

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  connection.query(
    "SELECT * FROM User WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        if (
          result[0].username === username &&
          result[0].password === password &&
          result[0].role === "student"
        ) {
          res.send({
            status: 200,
            navigation: "/dashboard",
          });
        } else if (
          result[0].username === username &&
          result[0].password === password &&
          result[0].role === "teacher"
        ) {
          res.send({
            status: 200,
            navigation: "/teacher-home",
          });
        } else {
          res.send({
            status: 404,
            message: "Invalid Credentials",
          });
        }
      }
    }
  );
});
router.get("/login", (req, res) => {
  console.log("GET Api recieved!");
  const query = "SELECT * FROM User";
  connection.query(query, (error, results, fields) => {
    res.json(results);
  });
});

router.post("/signup", (req, res) => {
  // handle user signup
});

module.exports = router;
