const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());

router.post("/", async (req, res) => {
    const resourceID = req.body.resourceID;
    const username = req.body.username;
    console.log("DeleteResource request by " + username+" for resourceID "+resourceID);

    connection.query("DELETE FROM TeacherResources WHERE ResourceID = '" + resourceID + "';", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            connection.query("SELECT * FROM TeacherResources WHERE ResourceID = '" + resourceID + "';", (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    if (result.length <1) {
                        console.log("Resource Deleted");
                        res.json({data: "Resource Deleted"});
                    }
                }
            }
            );
        }
    });
});

router.get("/", (req, res) => {
    res.send("DeleteResource");
});

module.exports = router;
