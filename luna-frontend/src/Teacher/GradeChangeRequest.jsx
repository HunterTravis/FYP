import React from "react";
import TeacherGradeCard from "../Components/TeacherGradeCard";

function TeacherGradeChangeRequest(props) {
  const data = [
    {
      id: 1,
      studentName: "Fatima Jamal",
      course: "Software for Mobile Devices",
      obtainedMarks: 85.2,
      currentGrade: "A-",
    },
    {
      id: 2,
      studentName: "Hammad Ahmed",
      course: "Business Analytics Techniques",
      obtainedMarks: 76.8,
      currentGrade: "B",
    },
  ];

  return (
    <div>
      <h1>Grade Change Request</h1>
      <TeacherGradeCard data={data} />
    </div>
  );
}

export default TeacherGradeChangeRequest;
