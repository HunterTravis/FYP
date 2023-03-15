import "./Profile.css";
import { mockStudentData } from "../data/mockData";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

const ProfileInformation = () => {
  return (
    <div className="profile-info">
      <div className="container">
        <h1>Welcome back | Student Profile</h1>
        <ProfileCard student={mockStudentData} />
      </div>
    </div>
  );
};

export default ProfileInformation;
