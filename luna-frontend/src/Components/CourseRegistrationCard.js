import React, { useState } from "react";
import { useCookies } from "react-cookie";

const CourseRegistrationCard = ({ courses, registerHandler }) => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [section, setSection] = useState("A");

  const handleRegisterClick = (courseCode, section) => {
    registerHandler(cookie.username, courseCode, section);
  };

  return (
    <div className="withdraw-card">
      <div className="withdraw-card__header d-flex">
        <h5>Student Course Registration</h5>
      </div>
      <div className="withdraw-card__body">
        <table>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Type</th>
            <th>Credit Hrs.</th>
            <th>Section</th>
            <th></th>
          </tr>
          {courses.map((course) => {
            return (
              <tr>
                {console.log(course)}
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>{course.course_type}</td>
                <td>{course.credit_hours}</td>
                <td>
                  <select
                    // value={section}
                    // onChange={(e) => {
                    //   setSection(e.target.value);
                    // }}
                    id="sectionSelect"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleRegisterClick(
                        course.course_code,
                        document.getElementById("sectionSelect").value
                      )
                    }
                  >
                    Register
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CourseRegistrationCard;
