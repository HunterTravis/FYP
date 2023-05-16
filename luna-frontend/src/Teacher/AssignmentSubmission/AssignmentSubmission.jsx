import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AssignmentSubmission.css";

function TeacherAssignmentSubmission(props) {
  const location = useLocation();
  const { assignmentTitle, assignmentID, teacherID } = location.state;
  const [submissionData, setSubmissionData] = useState([]);

  return (
    <div>
      <div className="container">
        <h1>{assignmentTitle}</h1>
        <div className="assignment-submission-list">
          <ul className="nav nav-tabs" role="tablist">
            {submissionData.map((submission) => (
              <li className="nav-item">
                <Link
                  to="/teacher-submission-details"
                  state={{
                    assignmentTitle: assignmentTitle,
                    assignmentID: assignmentID,
                    teacherID: teacherID,
                    submissionID: submission.submissionID,
                    studentID: submission.studentID,
                    submissionDate: submission.submissionDate,
                    privateComments: submission.privateComments,
                  }}
                >
                  {submission.studentID}
                  {submission.submissionDate}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeacherAssignmentSubmission;
