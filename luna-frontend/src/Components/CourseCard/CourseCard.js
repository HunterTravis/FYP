import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  const { courseCode, assignments, courseName } = props;
  //console.log(props);
  // courseId,
  return (
    <div className="course-card">
      <div className="course-code">{courseCode}</div>
      <div className="course-name">{courseName}</div>
      <div className="course-assignments">
        {assignments.map((assignment) => (
          <div className="course-assignment" key={assignment.id}>
            <div className="course-assignment-name">{assignment.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
