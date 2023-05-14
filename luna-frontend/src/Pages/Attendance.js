import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import AttendanceCard from "../Components/AttendanceCard";
import "./Attendance.css";

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
  const [cookies, setCookie] = useCookies(["user"]);
  const [attendance, setAttendance] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/Attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: cookies.username }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result[0]);
        setAttendance(data.result);
      });
  }, []);

  return (
    <div className="attendance">
      <div className="container">
        <h1>Attendance</h1>
        <AttendanceCard data={attendance} />
      </div>
    </div>
  );
};

export default Attendance;
