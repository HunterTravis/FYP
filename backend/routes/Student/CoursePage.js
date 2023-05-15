const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());


router.post("/", (req, res) => {
    const { username } = req.body.username;
    const { courseCode } = req.body.courseCode;
    const { section } = req.body.section;
    const data = {
        assignments: [],
        announcements: [],
        resources: []
    };
    connection.query("SELECT A.AssignmentID, A.AssignmentName, A.AssignmentDescription, A.PostDate, A.DueDate, A.PostTime, A.DueTime, A.Status, A.Section, A.Semester, AN.AnnouncementID, AN.Text, AN.Date, AN.Time, AN.TeacherID, TR.ResourceID, TR.ResourceName, TR.ResourceType, TR.ResourceURL, TR.DateUploaded, TR.TimeUploaded FROM Assignments AS A LEFT JOIN Announcements AS AN ON A.CourseCode = AN.CourseCode AND A.Section = AN.Section LEFT JOIN TeacherResources AS TR ON A.CourseCode = TR.CourseCode AND A.Section = TR.Section WHERE A.CourseCode = 'CS102' AND A.Section = 'A';", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            results.forEach((row) => {
                if (row.AssignmentID) {
                    data.assignments.push({
                        id: row.AssignmentID,
                        name: row.AssignmentName,
                        description: row.AssignmentDescription,
                        postDate: row.PostDate,
                        dueDate: row.DueDate,
                        postTime: row.PostTime,
                        dueTime: row.DueTime,
                        status: row.Status,
                        section: row.Section,
                        semester: row.Semester
                    });
                }

                if (row.AnnouncementID) {
                    data.announcements.push({
                        id: row.AnnouncementID,
                        text: row.Text,
                        date: row.Date,
                        time: row.Time,
                        teacherId: row.TeacherID
                    });
                }

                if (row.ResourceID) {
                    data.resources.push({
                        id: row.ResourceID,
                        name: row.ResourceName,
                        type: row.ResourceType,
                        url: row.ResourceURL,
                        dateUploaded: row.DateUploaded,
                        timeUploaded: row.TimeUploaded
                    });
                }
            });
            console.log(data);
            res.json(data);
        }
    }

    );

});

module.exports = router;