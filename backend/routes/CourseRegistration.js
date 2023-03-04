const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require('../requires/connection.js');

router.use(bodyParser.json());

router.post('/', (req, res) => {
    console.log("POST Api recieved!");
    const username = req.body.username;
    connection.query("SELECT cr.* FROM Courses cr WHERE cr.course_code IN ( SELECT o.course_code FROM OfferedCoursesForCurrentSemester o INNER JOIN CoursePlan c ON o.course_code = c.course_code AND c.degree = (SELECT degree FROM Student WHERE student_id = '"+username+"') WHERE o.course_code IN (SELECT course_code FROM CoursePlan WHERE degree = (SELECT degree FROM Student WHERE student_id = '"+username+"')) );",
    (err, result) => {
        result=JSON.parse(JSON.stringify(result));
        console.log(result);
      if (err) {
        res.send({ err: err });
          }
          console.log(result.length);
      if (result.length > 0) {
        console.log("yehi horha hai");
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
router.get('/', (req, res) => {

  console.log("GET Api recieved!")
  const query = "SELECT * FROM User";
  connection.query(query, (error, results, fields) => {
    res.json(results);
  }
  )
});

module.exports = router;