import React from "react";

function TeacherGradeCard({ data }) {
  const requests = data;
  return (
    <div className="grade-card">
      <div className="grade-card__header d-flex">
        <h5>Grade Change Requests</h5>
      </div>
      <div className="grade-card__body">
        <table>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Obtained Marks</th>
            <th>Current Grade</th>
            <th></th>
            <th></th>
          </tr>
          {requests.map((request) => (
            <tr>
              <td>{request.studentName}</td>
              <td>{request.course}</td>
              <td>{request.obtainedMarks}</td>
              <td>{request.currentGrade}</td>
              <td>
                <button className="btn btn-primary">Increase Grade</button>
              </td>
              <td>
                <button className="btn btn-danger">Discard</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>{data.studentName}</td>
            <td>{data.course}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default TeacherGradeCard;
