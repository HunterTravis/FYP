const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../requires/connection.js");

router.use(bodyParser.json());

router.post("/", (req, res) => {
  const { username } = req.body.username;
  var data = [];

  connection.query(
    "SELECT * FROM StudentCourseRecords WHERE StudentID='" + username + "';",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        result = JSON.parse(JSON.stringify(result));
        result.forEach((row, index) => {
          const section = row.Section;
          const courseCode = row.CourseCode;
          connection.query(
            "SELECT * FROM Assignments where Section='" +
              section +
              "' AND CourseCode='" +
              courseCode +
              "';",
            (err, result2) => {
              if (err) {
                console.log(err);
              } else {
                result2 = JSON.parse(JSON.stringify(result2));

                const assignments = result2.map((row, counter) => ({
                  id: counter + 1,
                  name: row.AssignmentName,
                }));

                data.push({
                  id: index + 1,
                  courseName: courseCode,
                  assignments: assignments,
                });
                if (data.length === result.length) {
                  res.send(data);
                }
              }
            }
          );
        });
      }
    }
  );
});

module.exports = router;
