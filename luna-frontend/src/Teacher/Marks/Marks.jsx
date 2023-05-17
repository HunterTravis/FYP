import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockTeacherAttendance } from "../../data/teacherAttendance";
import "./Marks.css";

function TeacherMarks(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(mockTeacherAttendance);
  }, []);

  return (
    <div className="marks">
      <div className="container">
        <h1>Marks</h1>
        <div className="marks-courses">
          {courses.map((course) => (
            <Link
              to="/teacher-add-marks"
              state={{ courseCode: course.code, section: course.section }}
            >
              <div className="marks-course">
                <h5>{course.code}</h5>
                <p>{course.section}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherMarks;
