import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { mockTeacherCourses } from "../../data/teacherCourses";
import "./Courses.css";

function TeacherCourses(props) {
  const [cookies, setCookie] = useCookies(["user"]);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    setCourseData(mockTeacherCourses);
    // console.log("asd");
    // fetch("http://localhost:3001/Courses", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: { username: cookies.username },
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data); // logs the list of objects
    //     setCourseData(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }, []);

  // const data = dummyData;
  return (
    <div className="courses">
      <div className="container">
        <h1>Courses</h1>
        <div className="course-cards mr-0">
          {courseData.map((course) => (
            <Link
              to="/teacher-course-page"
              state={{ courseHead: course.courseName }}
            >
              <CourseCard key={course.id} {...course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherCourses;
