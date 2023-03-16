const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../requires/connection.js");

router.use(bodyParser.json());

router.post("/", (req, res) => {
    connection.query( "SELECT * FROM courses", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



module.exports = router;