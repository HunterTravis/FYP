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
    fetch("http://localhost:3001/TeacherCourses", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify( {username: cookies.username}),
    })
      .then((response) => response.json())
      .then((data) => {
        data = data.map((course,i) => {
          return {
            id: (i+1),
            courseCode: course.courseCode,
            courseName: course.courseName,
            section: course.section,}
          });
          console.log(data);
        setCourseData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              state={{ courseHead: course.courseCode, section: course.section}}
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
