const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());

router.post("/", async (req, res) => {

  const username = req.body.username;
  console.log("TeacherCourses request by " + username);
  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM TeacherCourseRecords WHERE Username='" + username + "';",
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    const data = await Promise.all(
      result.map(async (row) => {
        const result2 = await new Promise((resolve, reject) => {
          connection.query(
            "SELECT * FROM Courses WHERE course_code='" + row.CourseCode + "';",
            (err, result2) => {
              if (err) {
                console.log(err);
                reject(err);
              } else {
                resolve(result2);
              }
            }
          );
        });

        const section = row.Section;
        const courseCode = row.CourseCode;
        const courseName = result2[0].course_name;
        return {
          courseCode: courseCode,
          courseName: courseName,
          section: section,
        };
      })
    );
    res.send(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
