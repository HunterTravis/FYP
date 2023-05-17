import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mockSectionStudentsData } from "../../data/teacherAttendance";
import "./AddAttendance.css";

function AddAttendance(props) {
  const location = useLocation();
  const { courseCode, section } = location.state;
  const [sectionStudents, setSectionStudents] = useState([]);

  useEffect(() => {
    const courseSection = section;
    setSectionStudents(mockSectionStudentsData[courseSection]);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Add Attendance</h1>
        <div className="students-list">
          <table>
            <thead>
              <th>Student Name</th>
              <th>Attendance Percentage</th>
              <th>Attendance</th>
            </thead>
            <tbody>
              {sectionStudents.map((student) => (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.attendancePercentage}</td>
                  <td>
                    <select>
                      <option value="present">P</option>
                      <option value="absent">A</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="attendance-button">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddAttendance;
