import React from "react";
import { useLocation } from "react-router-dom";
import "./SubmissionDetails.css";

function TeacherSubmissionDetails(props) {
  const location = useLocation();
  const {
    assignmentTitle,
    assignmentID,
    teacherID,
    submissionID,
    studentID,
    submissionDate,
    privateComments,
  } = location.state;

  return (
    <div>
      <div className="container">
        <h1>Submission Details</h1>
      </div>
    </div>
  );
}

export default TeacherSubmissionDetails;
