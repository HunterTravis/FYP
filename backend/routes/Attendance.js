const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../requires/connection.js");

router.use(bodyParser.json());

router.post("/", (req, res) => {
    const { username } = req.body;
    connection.query("SELECT * FROM Attendance WHERE StudentID = '" + username + "';", (err, result) => {
        console.log(result);
        result = JSON.parse(JSON.stringify(result));
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            // var coursesNames = new Set(result.map((item) => item.SemesterName));

            const output = {}

            for (const row of result) {
                const semesterName = row.SemesterName
                const courseCode = row.CourseCode
                const course = {
                    CourseCode: row.CourseCode,
                    CourseName: row.CourseName,
                    CreditHours: row.CreditHours,
                    Type: row.Type
                }

                if (!output[semesterName]) {
                    output[semesterName] = {
                        SemesterName: semesterName,
                        courses: {}
                    }
                }

                if (!output[semesterName].courses[courseCode]) {
                    output[semesterName].courses[courseCode] = {
                        ...course,
                        numPresents: 0,
                        numAbsents: 0
                    }
                }

                // increment the number of presents and absents for this course
                const isPresent = row.Status === 'Present'
                if (isPresent) {
                    output[semesterName].courses[courseCode].numPresents++
                } else {
                    output[semesterName].courses[courseCode].numAbsents++
                }
            }

            // calculate the percentage of presents for each course
            for (const semester of Object.values(output)) {
                for (const course of Object.values(semester.courses)) {
                    const { numPresents, numAbsents } = course
                    const total = numPresents + numAbsents
                    const percentage = total === 0 ? 0 : numPresents / total * 100
                    course.Percentage = percentage.toFixed(2) + '%'
                }
            }

            const finalOutput = Object.values(output)
            console.log(finalOutput[0]);
            res.send({
                result: finalOutput,
            });
        } else {
            res.send({
                status: 404,
            });
        }
    });
});


module.exports = router;
