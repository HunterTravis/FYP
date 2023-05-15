import { mockStudentData } from "../../data/mockData";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import "./Home.css";

const StudentHome = () => {
  return (
    <div className="profile-info">
      <div className="container">
        <h1>Student Profile</h1>
        <ProfileCard student={mockStudentData} />
      </div>
    </div>
  );
};

export default StudentHome;
