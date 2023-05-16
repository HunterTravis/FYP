const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());


router.post("/", async (req, res) => {
    const studentID = req.body.username;
    const assignmentID = req.body.assignmentID;
    const files = req.body.files;
    const privateComment = req.body.privateComment;
    await connection.query("", (err, result) => {
        if (err) {
            console.log(err);
        } else {
           
        }
    });
    await connection.query("", (err, result) => {
        if (err) {
            console.log(err);
        } else {
              res.json("successfully submitted");
        }
    });
    
    
    }

);
module.exports = router;