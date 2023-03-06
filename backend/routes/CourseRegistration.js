const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require('../requires/connection.js');

router.use(bodyParser.json());

router.post('/', (req, res) => {
    console.log("Course Registration Page request by:"+req.body.username);
    const username = req.body.username;
    connection.query("SELECT cr.* FROM Courses cr WHERE cr.course_code IN ( SELECT o.course_code FROM OfferedCoursesForCurrentSemester o INNER JOIN CoursePlan c ON o.course_code = c.course_code AND c.degree = (SELECT degree FROM Student WHERE student_id = '"+username+"') WHERE o.course_code IN (SELECT course_code FROM CoursePlan WHERE degree = (SELECT degree FROM Student WHERE student_id = '"+username+"')) );",
    (err, result) => {
        result=JSON.parse(JSON.stringify(result));
      if (err) {
        res.send({ err: err });
          }
      if (result.length > 0) {
        res.send({
            result: result,
        });
      } else {
        res.send({
          status: 404,
        });
      }
    }
  );
});
router.post('/register', (req, res) => {
  console.log("Course Registration request by:"+req.body.username);
  //first query is to check if that course is already registered
  connection.query("SELECT * FROM StudentCourseRecords where StudentID='"+req.body.username+"' AND CourseCode='"+req.body.courseCode+"'", (error, results) => {
    if(results.length < 1){
      var currentSemester;
      //second query is to get the current semester of the student
      connection.query("SELECT currentSemester FROM Student WHERE student_id='"+req.body.username+"';", (error, results1) => {
        currentSemester = results1[0].currentSemester;
      });
      //third query is to insert the course in the student's course records
      connection.query("INSERT INTO StudentCourseRecords (StudentID, CourseCode,Section,Status,AttemptedSemester) VALUES ('"+req.body.username+"', '"+req.body.courseCode+"','"+req.body.section+"','ongoing','"+currentSemester+"')", (error, results) => {
        if(error){
          console.log(error);
        }else{
          res.send({result: results});
          //fourth query is to check if the course is registered
          connection.query("SELECT * FROM StudentCourseRecords where StudentID='"+req.body.username+"' AND CourseCode='"+req.body.courseCode+"'", (error, results2) => {
            if(results2.length > 0){
              console.log("Course Registered");
              res.send({registrationResult : "Success"})
            }
            else{
              console.log("Course Registration Failed");
              res.send({registrationResult : "Failed"})
            }
          }
          );
        }
      })
    }
    else{ res.send({registrationResult : "Already Registered"})}
  }
)
});

module.exports = router;