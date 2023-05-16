const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());


router.post("/", async (req, res) => {
    const username = req.body.username;
    const courseCode = req.body.courseCode;
    const section = req.body.section;
    console.log(username, courseCode, section)
    const data = {
        assignments: [],
        announcements: [],
        resources: []
    };
    await connection.query("SELECT AssignmentID, AssignmentName, AssignmentDescription, PostDate, DueDate, PostTime, DueTime, Status, Section, Semester FROM Assignments WHERE CourseCode = '"+courseCode+"' AND Section = '"+section+"';", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            result.forEach((row) => {
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
              });
              //console.log(data)
        }
    });
    await connection.query("SELECT AnnouncementID, Text, Date, Time, TeacherID FROM Announcements WHERE CourseCode = '"+courseCode+"' AND Section = '"+section+"';", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            result.forEach((row) => {
                data.announcements.push({
                  id: row.AnnouncementID,
                  text: row.Text,
                  date: row.Date,
                  time: row.Time,
                  teacherId: row.TeacherID
                });
              });
        }
    });
    await connection.query("SELECT ResourceID, ResourceName,description, ResourceType, ResourceURL, DateUploaded, TimeUploaded FROM TeacherResources WHERE CourseCode = '"+courseCode+"' AND Section = '"+section+"';", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            result.forEach((row) => {
                data.resources.push({
                  id: row.ResourceID,
                  description: row.description,
                  name: row.ResourceName,
                  type: row.ResourceType,
                  url: row.ResourceURL,
                  dateUploaded: row.DateUploaded,
                  timeUploaded: row.TimeUploaded
                });
              });
              console.log(data)
              res.json(data);
        }
    });
    
    
    }

);
module.exports = router;