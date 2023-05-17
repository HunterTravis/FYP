const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");

router.use(bodyParser.json());


router.post("/", async (req, res) => {
    const {username,courseCode,section} = req.body;
    const data={resources:[],assignments:[],announcements:[]};
    
    await connection.query("SELECT AssignmentID, AssignmentName, AssignmentDescription, PostDate, DueDate, PostTime, DueTime, Status, Section, Semester FROM Assignments WHERE CourseCode = '"+courseCode+"' AND Section = '"+section+"';", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            result.forEach((row) => {
                data.assignments.push({
                  AssignmentID: row.AssignmentID,
                  AssignmentName: row.AssignmentName,
                  AssignmentDescription: row.AssignmentDescription,
                  PostDate: row.PostDate,
                  DueDate: row.DueDate,
                  PostTime: row.PostTime,
                  DueTime: row.DueTime,
                  Status: row.Status,
                  Section: row.Section,
                  Semester: row.Semester
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
                  AnnouncementID: row.AnnouncementID,
                  Title:row.Title,
                  Text: row.Text,
                  Date: row.Date,
                  Time: row.Time,
                  TeacherID: row.TeacherID
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
                  ResourceID: row.ResourceID,
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