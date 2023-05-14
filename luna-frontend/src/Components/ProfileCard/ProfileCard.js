import React from "react";
import "./ProfileCard.css";

function ProfileCard({ student }) {
  const mockStudentData = student;

  return (
    <div className="profile-card">
      <div className="uni-info">
        <div className="info-title">
          <h2>University Information</h2>
        </div>
        <div className="info-body">
          <p>Roll No: {mockStudentData.UniversityInformation.RollNumber}</p>
          <p>Degree: {mockStudentData.UniversityInformation.Degree}</p>
          <p>Batch: {mockStudentData.UniversityInformation.Batch}</p>
          <p>Section: {mockStudentData.UniversityInformation.Section} </p>
          <p>Campus: {mockStudentData.UniversityInformation.Campus}</p>
          <p>Status: {mockStudentData.UniversityInformation.Status}</p>
        </div>
      </div>

      <div className="personal-info">
        <div className="info-title">
          <h2>Personal Information</h2>
        </div>
        <div className="info-body">
          <p>Name: {mockStudentData.PersonalInformation.Name}</p>
          <p>Gender: {mockStudentData.PersonalInformation.Gender}</p>
          <p>DOB: {mockStudentData.PersonalInformation.DOB}</p>
          <p>CNIC: {mockStudentData.PersonalInformation.CNIC}</p>
          <p>Email: {mockStudentData.PersonalInformation.Email}</p>
          <p>Mobile No: {mockStudentData.PersonalInformation.MobileNumber}</p>
        </div>
      </div>

      <div className="contact-info">
        <div className="info-title">
          <h2>Contact Information</h2>
        </div>
        <div className="info-body">
          <p>Address: {mockStudentData.ContactInformation.Address}</p>
          <p>Postal code: {mockStudentData.ContactInformation.PostalCode}</p>
          <p>City: {mockStudentData.ContactInformation.City}</p>
          <p>Country: {mockStudentData.ContactInformation.Country}</p>
          <p>Contact No: {mockStudentData.ContactInformation.ContactNumber}</p>
        </div>
      </div>

      <div className="family-info">
        <div className="info-title">
          <h2>Family Information</h2>
        </div>
        <div className="info-body">
          <div>
            <p>Name: {mockStudentData.FamilyInformation[0].Name}</p>
            <p>Relation: {mockStudentData.FamilyInformation[0].Relation}</p>
            <p>CNIC: {mockStudentData.FamilyInformation[0].CNIC}</p>
          </div>
          <div>
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
