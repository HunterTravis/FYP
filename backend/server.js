//importing express
const express = require("express");
const path = require('path');
//starting express server object
const app = express();

app.use('/files', express.static('E:/'));

//handled CORS error
const cors = require("cors");
app.use(cors({ origin: "*" }));

const TeacherCoursePage = require("./routes/Teacher/CoursePage");
const TeacherCourses = require("./routes/Teacher/Courses");
const CourseRegistrationData = require("./routes/Student/CourseRegistration");
const authRoutes = require("./routes/auth");
const coursePage = require("./routes/Student/CoursePage");
const Attendance = require("./routes/Student/Attendance");
const Courses = require("./routes/Student/Courses");
const Marks = require("./routes/Student/Marks");
const AssignmentSubmission = require("./routes/Student/AssignmentSubmission");
const TeacherDeleteResource = require("./routes/Teacher/DeleteResource");



app.use("/TeacherDeleteResource", TeacherDeleteResource)
app.use("/TeacherCoursePage", TeacherCoursePage);
app.use("/TeacherCourses", TeacherCourses);
app.use("/coursePage", coursePage)
app.use("/AssignmentSubmission", AssignmentSubmission);
app.use("/auth", authRoutes);
app.use("/CourseRegistration", CourseRegistrationData);
app.use("/Attendance", Attendance);
app.use("/Courses", Courses);
app.use("/Marks", Marks);

//making the server listen to port
app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});
