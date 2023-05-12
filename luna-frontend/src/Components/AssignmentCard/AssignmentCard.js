import React from "react";
import "./AssignmentCard.css";

const AssignmentCard = (props) => {
  const { title, dueDate } = props;
  return (
    <div className="assignment-card d-flex justify-content-between">
      <div className="assignment__title">
        {title}
        {/* <p id="course">{course}</p> */}
      </div>
      <div className="assignment__dueDate">{dueDate}</div>
    </div>
  );
};

export default AssignmentCard;
