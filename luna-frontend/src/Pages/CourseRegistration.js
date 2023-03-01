import CourseRegistrationCard from "../Components/CourseRegistrationCard";
import "./CourseRegistration.css";
import registeredCourses from "../data/registeredCourses";

const CourseRegistration = () => {
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

  const handleRegisterCourse = (ccode, cname) => {
    // console.log(ccode, cname);
    registeredCourses.push({ courseCode: ccode, courseName: cname });
  };

  return (
    <>
      <div className="registration">
        <div className="container">
          <h1>Course Registration</h1>
          <CourseRegistrationCard
            data={offeredCourses}
            handleRegisterCourse={handleRegisterCourse}
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
