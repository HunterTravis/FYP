import React from "react";
import "./ProfileCard.css";

function ProfileCard({ student }) {
  const mockStudentData = student;

  return (
    <div className="profile-card">
      <div className="info">
        <div className="info-title">
          <h2>University Information</h2>
        </div>
        <div className="info-body">
          <table>
            <tr>
              <td>
                Roll No: {mockStudentData.UniversityInformation.RollNumber}
              </td>
              <td>Degree: {mockStudentData.UniversityInformation.Degree}</td>
            </tr>
            <tr>
              <td>Batch: {mockStudentData.UniversityInformation.Batch}</td>
              <td>Section: {mockStudentData.UniversityInformation.Section}</td>
            </tr>
            <tr>
              <td>Campus: {mockStudentData.UniversityInformation.Campus}</td>
              <td>Status: {mockStudentData.UniversityInformation.Status}</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="info">
        <div className="info-title">
          <h2>Personal Information</h2>
        </div>
        <div className="info-body">
          <table>
            <tr>
              <td>Name: {mockStudentData.PersonalInformation.Name}</td>
              <td>CNIC: {mockStudentData.PersonalInformation.CNIC}</td>
            </tr>
            <tr>
              <td>Gender: {mockStudentData.PersonalInformation.Gender}</td>
              <td>Email: {mockStudentData.PersonalInformation.Email}</td>
            </tr>
            <tr>
              <td>DOB: {mockStudentData.PersonalInformation.DOB}</td>
              <td>
                Mobile No: {mockStudentData.PersonalInformation.MobileNumber}
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="info">
        <div className="info-title">
          <h2>Contact Information</h2>
        </div>
        <div className="info-body">
          <table>
            <tr>
              <td>Address: {mockStudentData.ContactInformation.Address}</td>
              <td>
                Postal code: {mockStudentData.ContactInformation.PostalCode}
              </td>
            </tr>
            <tr>
              <td>City: {mockStudentData.ContactInformation.City}</td>
              <td>
                Contact No: {mockStudentData.ContactInformation.ContactNumber}
              </td>
            </tr>
            <tr>
              <td>Country: {mockStudentData.ContactInformation.Country}</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>

      <div className="info">
        <div className="info-title">
          <h2>Family Information</h2>
        </div>
        <div className="info-body d-flex">
          <div className="father">
            <p>Name: {mockStudentData.FamilyInformation[0].Name}</p>
            <p>Relation: {mockStudentData.FamilyInformation[0].Relation}</p>
            <p>CNIC: {mockStudentData.FamilyInformation[0].CNIC}</p>
          </div>
          <div className="mother">
            <p>Name: {mockStudentData.FamilyInformation[1].Name}</p>
            <p>Relation: {mockStudentData.FamilyInformation[1].Relation}</p>
            <p>CNIC: {mockStudentData.FamilyInformation[1].CNIC}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
