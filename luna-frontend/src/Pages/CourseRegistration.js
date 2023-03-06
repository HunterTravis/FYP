import CourseRegistrationCard from "../Components/CourseRegistrationCard";
import "./CourseRegistration.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CourseRegistration = () => {
  var counter = 0;
  const [cookies, setCookie] = useCookies(['user']);
  const [offeredCourses, setOfferedCourses] = useState([]);
  useEffect(() => {
    if (counter === 0) { counter += 1; }
    else {
      fetch('http://localhost:3001/CourseRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: cookies.username })
      })
        .then(response => response.json())
        .then(data => {
          if (data.result) {
              setOfferedCourses(data.result);
            }
          else {
            console.log('Result is undefined');
          }

        }
        )
        .catch(error => { alert("Something went wrong"); console.log(error) });
    }
  }
    , []);

  return (
    <>
      <div className="registration">
        <div className="container">
          <h1>Course Registration</h1>
          <CourseRegistrationCard courses={offeredCourses} />
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
