const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");
const { gridColumnGroupsLookupSelector } = require("@mui/x-data-grid");

router.use(bodyParser.json());

router.post("/", (req, res) => {
  const username = req.body.username;
  console.log(username);
  connection.query(
    "SELECT StudentCourseRecordID, CourseCode FROM StudentCourseRecords WHERE StudentID='" +
      username +
      "';",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("asd");
        result = JSON.parse(JSON.stringify(result));
        const StudentCourseRecordID = result.map(
          (item) => item.StudentCourseRecordID
        );
        const CourseCode = result.map((item) => item.CourseCode);
        // console.log(StudentCourseRecordID);
        // console.log(CourseCode);

        CourseCode.forEach((row) => {
          // console.log(row);
          connection.query(
            "SELECT course_name FROM Courses WHERE course_code='" + row + "';",
            (err1, result1) => {
              if (err1) {
                console.log(err1);
              } else {
                result1 = JSON.parse(JSON.stringify(result1));
                console.log(result1);
              }
            }
          );
        });
      }
    }
  );
});

module.exports = router;
