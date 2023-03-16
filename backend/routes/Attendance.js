const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../requires/connection.js");

router.use(bodyParser.json());

router.post("/", (req, res) => {
    const {username} = req.body;
    connection.query("SELECT * FROM Attendance WHERE student_id = '" + username + "';", (err, result) => {
        result = JSON.parse(JSON.stringify(result));
        if (err) {
            res.send({err: err});
        }
        if (result.length > 0) {
            res.send({
                result: result,
            });
        } else {
            res.send({
                status: 404,
            });
        }
    });
});


module.exports = router;
