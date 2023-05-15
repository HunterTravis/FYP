//importing express
const express = require("express");

//starting express server object
const app = express();

//handled CORS error
const cors = require("cors");
app.use(cors({ origin: "*" }));

const CourseRegistrationData = require("./routes/Student/CourseRegistration");
const authRoutes = require("./routes/auth");
const Attendance = require("./routes/Student/Attendance");
const Courses = require("./routes/Student/Courses");
const Marks = require("./routes/Student/Marks");
app.use("/auth", authRoutes);
app.use("/CourseRegistration", CourseRegistrationData);
app.use("/Attendance", Attendance);
app.use("/Courses", Courses);
app.use("/Marks", Marks);

//making the server listen to port
app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});
