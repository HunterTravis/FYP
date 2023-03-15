import AttendanceCard from "../Components/AttendanceCard";
import "./Attendance.css";
import { useState } from "react";

const plan = [
  {
    semesterNo: 1,
    semesterName: "Fall 2021",
    courses: [
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
    ],
  },
];

const Attendance = () => {
  const [semester, setSemester] = useState("");

  return (
    <div className="attendance">
      <div className="container">
        <h1>Attendance</h1>
        <div className="sem-selector">
          <select
            value={semester}
            name="semester"
            id="semester"
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="1">Spring 2022</option>
            <option value="2">Fall 2022</option>
            <option value="3">Spring 2023</option>
          </select>
        </div>
        <AttendanceCard data={plan} />
      </div>
    </div>
  );
};

export default Attendance;
