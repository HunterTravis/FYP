import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const CourseRegistrationCard = ({ courses, registerHandler, deleteHandler }) => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [section, setSection] = useState(Array(courses.length));

  // useEffect(() => {
  //   setSection(Array(courses.length).fill("A"));
  //   console.log(section)
  // },[]);

  const handleDeleteClick = (courseCode) => {
    console.log(courseCode);
    deleteHandler(courseCode);
  };

  const handleRegisterClick = (courseCode, section) => {
    console.log(courseCode, section);
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
          {courses.map((course, i) => {
            return (
              <tr>
                <td>{course.course_code}</td>
                <td>{course.course_name}</td>
                <td>{course.course_type}</td>
                <td>{course.credit_hours}</td>
                <td>
                  <select
                    value={section[i]}
                    onChange={(e) => {
                      const temp = [...section];
                      temp[i] = e.target.value;
                      setSection(temp);
                    }}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </td>
                <td>
                  {course.status === "Registered" ? (
                    <button className="btn btn-primary" disabled>
                      Registered
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleRegisterClick(course.course_code, section[i]);
                      }}
                    >
                      Register
                    </button>
                  )}
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
