const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");
const multer = require("multer");
const path = require("path");
router.use(bodyParser.json());
const upload = multer({ dest: "E:/" });
const fs = require("fs");

router.post("/", upload.single("file"), (req, res) => {
  const { type, title, description, dueDate, courseCode, section } = req.body;
  const file = req.file;

  if ((type === "Assignment" && !file) || (type === "Resource" && !file)) {
    res.json({ data: "Please select a file." });
  } else if (type === "Assignment" && !dueDate) {
    res.json({ data: "Please enter a due date." });
  } else if (type === "Assignment") {
    const postDate = new Date().toISOString().split("T")[0]; // Current date
    const postTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); // Current time
    const dueTime = "23:59"; // Due time set to 11:59 PM
    const modifiedFileName = `${file.originalname}`;

    const assignmentData = {
      AssignmentName: title,
      AssignmentDescription: description,
      CourseCode: courseCode,
      PostDate: postDate,
      DueDate: dueDate,
      PostTime: postTime,
      DueTime: dueTime,
      Status: "Open", // Set the initial status as "Open"
      Section: section,
      Semester: "3", // Add your semester value here
    };

    // Move the file to the desired directory
    const fileDestination = `E:/${modifiedFileName}`;
    fs.rename(file.path, fileDestination, (err) => {
      if (err) {
        console.log(err);
        res.json({ data: "Error saving file." });
        return;
      }

      // Insert the assignment data into the Assignments table
      connection.query("INSERT INTO Assignments SET ?", assignmentData, (err, result) => {
        if (err) {
          console.log(err);
          res.json({ data: "Error" });
        } else {
          console.log("Assignment inserted successfully");

          // Get the AssignmentID of the inserted assignment
          const assignmentID = result.insertId;

          // Insert the file path and AssignmentID into the AssignmentData table
          const assignmentFileData = {
            AssignmentFile: "http://localhost:3001/files/"+modifiedFileName,
            AssignmentID: assignmentID,
          };

          connection.query("INSERT INTO AssignmentData SET ?", assignmentFileData, (err, result) => {
            if (err) {
              console.log(err);
              res.json({ data: "Error saving file path." });
            } else {
              console.log("File path saved successfully");
              res.json({ data: "Created Successfully" });
            }
          });
        }
      });
    });
  }
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
