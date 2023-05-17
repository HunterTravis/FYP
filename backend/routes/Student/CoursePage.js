const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());


router.post("/", async (req, res) => {
    const courseCode = req.body.courseCode;
    const section = req.body.section;
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
                  ResourcesID: row.ResourceID,
                  description: row.description,
                  ResourceName: row.ResourceName,
                  ResourceType: row.ResourceType,
                  ResourceURL: row.ResourceURL,
                  DateUploaded: row.DateUploaded,
                  TimeUploaded: row.TimeUploaded
                });
              });
              res.json(data);
        }
    });
    
    
    }

);
module.exports = router;