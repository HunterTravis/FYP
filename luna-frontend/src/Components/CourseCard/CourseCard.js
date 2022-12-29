import React from 'react';
import './CourseCard.css';

function CourseCard(props) {
  const { courseName, assignments } = props;

  return (
    <div className="course-card">
      <div className="course-name">{courseName}</div>
      <div className="assignments">
        {assignments.map(assignment => (
          <div className="assignment" key={assignment.id}>
            <div className="assignment-name">{assignment.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;