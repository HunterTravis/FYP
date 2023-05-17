const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const connection = require("../../requires/connection.js");
const multer = require("multer");
const path = require("path");
var studentUsername = "asd";
router.use(bodyParser.json());

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const dateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return dateTime;
}

// Configure multer middleware to handle file uploads


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "E:/"); // Specify the destination directory where files will be saved
    },
    filename: (reqq, file, cb) => {
      const fileName = `${file.originalname}`; // Prepend studentID to file name
      console.log(fileName);
      cb(null, fileName);
    },
  });
  
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      // Validate file here if needed
      cb(null, true);
    },
  });

  router.post("/", (req, res, next) => {
    studentUsername = req.body.username;
    next();
  }, upload.array("files"), async (req, res) => {
    const studentID = req.body.username; // Assuming studentID is available in the request body
    const assignmentID = req.body.assignmentID;
    console.log("Here first:" + studentID);
    const privateComment = req.body.privateComment;
    console.log(req.body);
  
    // Insert data into AssignmentSubmissionReport table
    const submissionQuery =
      "INSERT INTO AssignmentSubmissionReports (AssignmentID, StudentID, PrivateComment, SubmissionDateTime) VALUES (?, ?, ?, ?)";
    const submissionValues = [assignmentID, studentID, privateComment, getCurrentDateTime()];
  
    // Insert data into AssignmentSubmissionFiles table
    const fileQuery =
      "INSERT INTO AssignmentSubmissionFiles (FileName, SubmissionID) VALUES (?, ?)";
  
    connection.beginTransaction((err) => {
      if (err) {
        console.log(err);
        res.status(500).json("Error occurred during submission.");
        return;
      }
  
      // Insert into AssignmentSubmissionReport table
      connection.query(submissionQuery, submissionValues, (err, result) => {
        if (err) {
          console.log(err);
          connection.rollback(() => {
            res.status(500).json("Error occurred during submission.");
          });
          return;
        }
  
        const submissionID = result.insertId;
  
        // Commit the transaction
        connection.commit((err) => {
          if (err) {
            console.log(err);
            connection.rollback(() => {
              res.status(500).json("Error occurred during submission.");
            });
            return;
          }
  
          // Get file paths from req.files and insert into AssignmentSubmissionFiles table
          const fileInsertPromises = req.files.map((file) => {
            const filePath = "http://localhost:3001/files/" + file.filename;
  
            return new Promise((resolve, reject) => {
              connection.query(fileQuery, [filePath, submissionID], (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              });
            });
          });
  
          // Execute file-saving procedure after all file insert queries are completed
          Promise.all(fileInsertPromises)
            .then(() => {
              // File-saving procedure completed, send response
              res.json("Successfully submitted.");
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json("Error occurred during file insertions.");
            });
        });
      });
    });
  });
  
module.exports = router;