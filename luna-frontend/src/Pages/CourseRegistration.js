import CourseRegistrationCard from "../Components/CourseRegistrationCard";
import "./CourseRegistration.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CourseRegistration = () => {
  var counter = 0;
  const [cookies, setCookie] = useCookies(["user"]);
  const [offeredCourses, setOfferedCourses] = useState([]);

  const handleDelete = (studentId, courseCode) => {
    const data = { username: studentId, courseCode: courseCode };

    fetch("/api/delete-course-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleRegister = (studentId, courseCode, section) => {
    fetch("http://localhost:3001/CourseRegistration/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: studentId, // student id
        courseCode: courseCode, // course code
        section: section, // course section
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.registrationResult === "Success") {
          console.log("Course Registered");
        } else if (data.registrationResult === "Already Registered") {
          console.log("Course Already Registered");
        } else {
          console.log("Course Registration Failed");
        }
      })
      .catch((error) => {
        console.log("Something went wrong:", error);
      });
  };

  useEffect(() => {
    if (counter === 0) {
      counter += 1;
    } else {
      fetch("http://localhost:3001/CourseRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: cookies.username }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            console.log(data.result);
            setOfferedCourses(data.result);
          } else {
            console.log("Result is undefined");
          }
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <div className="registration">
        <div className="container">
          <h1>Course Registration</h1>
          <CourseRegistrationCard
            courses={offeredCourses}
            registerHandler={handleRegister}
            deleteHandler={handleDelete}
          />
          <div id="help-section">
            <h2>Help</h2>
            <div>
              <a href="*">FAQ</a>
            </div>
            <div>
              <a href="*">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseRegistration;
