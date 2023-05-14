//importing express
const express = require("express");

//starting express server object
const app = express();

//handled CORS error
const cors = require("cors");
app.use(cors({ origin: "*" }));

const CourseRegistrationData = require("./routes/CourseRegistration");
const authRoutes = require("./routes/auth");
const Attendance = require("./routes/Attendance");
const Courses = require("./routes/Courses");
const Marks = require("./routes/Marks");
app.use("/auth", authRoutes);
app.use("/CourseRegistration", CourseRegistrationData);
app.use("/Attendance", Attendance);
app.use("/Courses", Courses);
app.use("/Marks", Marks);

//making the server listen to port
app.listen(3001, () => {
  console.log(`Server running on port ${3001}`);
});
