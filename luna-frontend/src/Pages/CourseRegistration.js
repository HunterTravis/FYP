import CourseRegistrationCard from "../Components/CourseRegistrationCard";
import "./CourseRegistration.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";


const CourseRegistration = () => {
  var counter=0;
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  useEffect(() => {
      if(counter===0){counter+=1;}
      else{

          if(cookies.Name === undefined || cookies.LoggedIn !== "true") {
              alert("You are not logged in");
              navigate('/');
          }
      }
  }, [])



  const offeredCourses = [
    {
      code: "CS302",
      cname: "Information Security",
      chours: "3",
      type: "Core",
    },
    {
      code: "CS402",
      cname: "Professional Practices in IT",
      chours: "3",
      type: "Core",
    },
    {
      code: "CS502",
      cname: "Design Defects and Restructuring",
      chours: "3",
      type: "Elective",
    },
  ];

  return (
    <>
      <div className="registration">
        <div className="container">
          <h1>Course Registration</h1>
          <CourseRegistrationCard data={offeredCourses} />
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
