import CourseRegistrationCard from "../Components/CourseRegistrationCard";
import "./CourseRegistration.css"

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

  return (
    <>
      <div className="registration"></div>
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
    </>
  );
};

export default CourseRegistration;
