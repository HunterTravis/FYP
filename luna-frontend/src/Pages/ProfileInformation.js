import './Profile.css';
import { mockStudentData } from "../data/mockData";

const ProfileInformation = () => {
  return (
    <div className="profile-info">

      <div className="container DisplayContainer">
        <h1>Welcome back | Student Profile</h1>
        <div className="home-current-info">
          <h2 className="current-class">University Information</h2>
          <h3 className="current-class">Roll No: {mockStudentData.UniversityInformation.RollNumber}</h3>
          <h3 className="current-class">Section: {mockStudentData.UniversityInformation.Section} </h3>
          <h3 className="current-class">Degree: {mockStudentData.UniversityInformation.Degree}</h3>
          <h3 className="current-class">Campus: {mockStudentData.UniversityInformation.Campus}</h3>
          <h3 className="current-class">Batch: {mockStudentData.UniversityInformation.Batch}</h3>
          <h3 className="current-class">Status: {mockStudentData.UniversityInformation.Status}</h3>
        </div>

        <div className="personal-info">
          <h2 className="current-class">Personal Information</h2>
          <h3 className="current-class">Name: {mockStudentData.PersonalInformation.Name}</h3>
          <h3 className="current-class">Gender: {mockStudentData.PersonalInformation.Gender}</h3>
          <h3 className="current-class">DOB: {mockStudentData.PersonalInformation.DOB}</h3>
          <h3 className="current-class">CNIC: {mockStudentData.PersonalInformation.CNIC}</h3>
          <h3 className="current-class">Email: {mockStudentData.PersonalInformation.Email}</h3>
          <h3 className="current-class">Mobile NO: {mockStudentData.PersonalInformation.MobileNumber}</h3>
        </div>

        <div className="contact-info">
          <h2 className="current-class">Contact Information</h2>
          <h3 className="current-class">Address: {mockStudentData.ContactInformation.Address}</h3>
          <h3 className="current-class">Postal code: {mockStudentData.ContactInformation.PostalCode}</h3>
          <h3 className="current-class">City: {mockStudentData.ContactInformation.City}</h3>
          <h3 className="current-class">Country: {mockStudentData.ContactInformation.Country}</h3>
          <h3 className="current-class">Contact Number: {mockStudentData.ContactInformation.ContactNumber}</h3>
        </div>

        <div className="family-info">
          <h2 className="current-class">Family Information</h2>
          <h3 className="current-class">Name: {mockStudentData.FamilyInformation[0].Name}, Relation: {mockStudentData.FamilyInformation[0].Relation}, CNIC: {mockStudentData.FamilyInformation[0].CNIC}</h3>
          <h3 className="current-class">Name: {mockStudentData.FamilyInformation[1].Name}, Relation: {mockStudentData.FamilyInformation[1].Relation}, CNIC: {mockStudentData.FamilyInformation[1].CNIC}</h3>
        </div>

        <div id="path">
          <h2>Education path</h2>
          <div id="path-graphic-container">
            <img
              id="path-graphic"
              src="https://recess-images.imgix.net/icons/general/education_path.svg?ixlib=rails-2.1.4&auto=compress%2Cformat"
              alt="Education path"
            />
          </div>
          <div id="path-info-container">
            <h4 id="prior-number">Credits acquired.</h4>
            <h4 id="remaing-number">Credits Remaining.</h4>
          </div>
        </div>
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
  );
};

export default ProfileInformation;
