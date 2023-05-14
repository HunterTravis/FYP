const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../requires/connection.js");

router.use(bodyParser.json());

router.post("/", (req, res) => {
  console.log("Course Registration Page request by:" + req.body.username);
  const username = req.body.username;
  connection.query(
    "SELECT cr.* FROM Courses cr WHERE cr.course_code IN ( SELECT o.course_code FROM OfferedCoursesForCurrentSemester o INNER JOIN CoursePlan c ON o.course_code = c.course_code AND c.degree = (SELECT degree FROM Student WHERE student_id = '" +
      username +
      "') WHERE o.course_code IN (SELECT course_code FROM CoursePlan WHERE degree = (SELECT degree FROM Student WHERE student_id = '" +
      username +
      "')) );",
    (err, result) => {
      result = JSON.parse(JSON.stringify(result));

      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        const courseCodes = result.map((course) => course.course_code);
        connection.query(
          "SELECT CourseCode FROM StudentCourseRecords WHERE StudentID = '" +
            username +
            "' AND CourseCode IN ('" +
            courseCodes.join("', '") +
            "') AND Status != 'Dropped';",
          (err, records) => {
            records = JSON.parse(JSON.stringify(records));
            if (err) {
              res.send({ err: err });
            }
            result.forEach((course) => {
              course.status = "Not Registered";
              records.forEach((record) => {
                if (course.course_code === record.CourseCode) {
                  course.status = "Registered";
                }
              });
            });
            console.log(result);
            res.send({
              result: result,
            });
          }
        );
      } else {
        res.send({
          status: 404,
        });
      }
    }
  );
});

router.post("/register", (req, res) => {
  console.log("Course Registration request by:" + req.body.username);
  //first query is to check if that course is already registered
  connection.query(
    "SELECT * FROM StudentCourseRecords where StudentID='" +
      req.body.username +
      "' AND CourseCode='" +
      req.body.courseCode +
      "'",
    (error, results) => {
      if (results.length < 1) {
        //second query is to get the current semester of the student
        connection.query(
          "SELECT currentSemester FROM Student WHERE student_id='" +
            req.body.username +
            "';",
          (error, results1) => {
            var currentSemester = results1[0].currentSemester;
            //third query is to insert the course in the student's course records
            connection.query(
              "INSERT INTO StudentCourseRecords (StudentID, CourseCode,Section,Status,AttemptedSemester) VALUES ('" +
                req.body.username +
                "', '" +
                req.body.courseCode +
                "','" +
                req.body.section +
                "','ongoing','" +
                currentSemester +
                "')",
              (error, results2) => {
                if (error) {
                  console.log(error);
                } else {
                  //fourth query is to check if the course is registered
                  connection.query(
                    "SELECT * FROM StudentCourseRecords where StudentID='" +
                      req.body.username +
                      "' AND CourseCode='" +
                      req.body.courseCode +
                      "'",
                    (error, results3) => {
                      if (results3.length > 0) {
                        console.log("Course Registered");
                        res.send({ registrationResult: "Success" });
                      } else {
                        console.log("Course Registration Failed");
                        res.send({ registrationResult: "Failed" });
                      }
                    }
                  );
                }
              }
            );
          }
        );
      } else {
        res.send({ registrationResult: "Already Registered" });
      }
    }
  );
});

router.post("/delete", (req, res) => {
  const { username, courseCode } = req.body;

  // Check if the record exists
  const checkQuery = `SELECT * FROM StudentCourseRecords 
                      WHERE StudentID = '${username}' 
                      AND CourseCode = '${courseCode}'`;

  connection.query(checkQuery, (err, results) => {
    if (err) {
      res.send({ err: err });
    } else if (results.length === 0) {
      res.send({ message: "Record not found." });
    } else {
      // Delete the record
      const deleteQuery = `DELETE FROM StudentCourseRecords 
                           WHERE StudentID = '${username}' 
                           AND CourseCode = '${courseCode}'`;

      connection.query(deleteQuery, (err, result) => {
        if (err) {
          res.send({ err: err });
        } else {
          console.log("Course Dropped");
          res.send({ message: "Record deleted successfully." });
        }
      });
    }
  });
});

module.exports = router;
