import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mockAssignmentSubmission } from "../../data/assignmentSubmission";
import "./AssignmentSubmission.css";

function TeacherAssignmentSubmission(props) {
  const location = useLocation();
  const { assignmentTitle, assignmentID, teacherID } = location.state;
  const [submissionData, setSubmissionData] = useState([]);

  useEffect(() => {
    setSubmissionData(mockAssignmentSubmission);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>{assignmentTitle}</h1>
        <div className="assignment-submission-list">
          <ul>
            <div className="list d-flex">
              {submissionData.map((submission) => (
                <li className="nav-item">
                  <Link
                    to="/teacher-submission-details"
                    state={{
                      assignmentTitle: assignmentTitle,
                      assignmentID: assignmentID,
                      teacherID: teacherID,
                      submissionID: submission.SubmissionID,
                      studentID: submission.StudentID,
                      submissionDate: submission.SubmissionDate,
                      privateComments: submission.PrivateComment,
                    }}
                  >
                    <div className="list-item d-flex">
                      <p>Student Name: {submission.StudentID}</p>
                      <p>Submission Date & Time: {submission.SubmissionDate}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeacherAssignmentSubmission;
