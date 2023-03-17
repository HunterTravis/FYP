import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  const { courseName, assignments } = props;
  // courseId,
  return (
    <div className="course-card">
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
