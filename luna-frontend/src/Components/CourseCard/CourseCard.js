import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  const { courseCode, courseName,section } = props;
  //console.log(props);
  // courseId,
  return (
    <div className="course-card">
      <div className="course-code">{courseCode}</div>
      <div className="course-name">{courseName}</div>
      <div className="section">Section:{section}</div>
    </div>
  );
}

export default CourseCard;
