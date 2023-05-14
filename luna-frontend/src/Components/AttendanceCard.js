import React from "react";

const AttendanceCard = ({ data }) => {
  const attendance = data;

  return (
    <div className="withdraw-card">
      {attendance.map((attendanceItem) => {
        return (
          <>
            <div className="withdraw-card__header d-flex">
              <h5>Semester - {attendanceItem.SemesterName}</h5>
            </div>
            <div className="withdraw-card__body">
              <table>
                <tr>
                  <th>Code</th>
                  <th>Course Name</th>
                  <th>Type</th>
                  <th>Credit Hrs.</th>
                  <th>Percentage</th>
                  <th>Review</th>
                </tr>
                {attendanceItem.courses.map((course) => {
                  return (
                    <tr>
                      <td>{course.CourseCode}</td>
                      <td>{course.CourseName}</td>
                      <td>{course.Type}</td>
                      <td>{course.CreditHours}</td>
                      <td>{course.Percentage}</td>
                      <td>
                        <button className="btn btn-primary">
                          Request for Modification
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AttendanceCard;
