import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mockTeacherAttendance } from "../../data/teacherAttendance";
import "./Attendance.css";

function TeacherAttendance(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(mockTeacherAttendance);
  }, []);

  return (
    <div className="attendance">
      <div className="container">
        <h1>Attendance</h1>
        <div className="attendance-courses">
          {courses.map((course) => (
            <Link
              to="/teacher-add-attendance"
              state={{ courseCode: course.code, section: course.section }}
            >
              <div className="attendance-course">
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

export default TeacherAttendance;
