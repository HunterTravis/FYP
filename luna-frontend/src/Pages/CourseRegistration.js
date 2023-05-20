import CourseRegistrationCard from "../Components/CourseRegistrationCard";
import "./CourseRegistration.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const CourseRegistration = () => {
  var counter = 0;
  const [section, setSection] = useState("A");
  const [cookies, setCookie] = useCookies(["user"]);
  const [offeredCourses, setOfferedCourses] = useState([]);

  const handleDelete = (studentId, courseCode) => {
    const data = { username: studentId, courseCode: courseCode};

    fetch("http://localhost:3001/CourseRegistration/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const handleRegister = (studentId, courseCode, section) => {
    console.log(studentId, courseCode, section);
    fetch("http://localhost:3001/CourseRegistration/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: studentId, // student id
        courseCode: courseCode, // course code
        section: section, // course section
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.registrationResult === "Success") {
          console.log("Course Registered");
        } else if (data.registrationResult === "Already Registered") {
          console.log("Course Already Registered");
        } else {
          console.log("Course Registration Failed");
        }
      })
      .catch((error) => {
        console.log("Something went wrong:", error);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  useEffect(() => {
    if (counter === 0) {
      counter += 1;
    } else {
      fetch("http://localhost:3001/CourseRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: cookies.username }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            console.log(data.result);
            setOfferedCourses(data.result);
          } else {
            console.log("Result is undefined");
          }
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <div className="registration">
        <div className="container">
          <h1>Course Registration</h1>
          <div className="withdraw-card__header d-flex">
        <h5>Student Course Registration</h5>
      </div>
      <TableContainer component={Paper} style={{marginTop:'1%', marginBottom:'29%'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }}>Code</StyledTableCell>
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }} >CourseName</StyledTableCell>
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }} >Type</StyledTableCell>
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }} >Credit Hrs</StyledTableCell>
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }} >Section</StyledTableCell>
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }}></StyledTableCell>
            <StyledTableCell style={{color:'white', backgroundColor: 'rgb(0, 51, 71)', fontSize: '110%' }}></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offeredCourses.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row.course_code}
              </StyledTableCell>
              <StyledTableCell  >{row.course_name}</StyledTableCell>
              <StyledTableCell >{row.course_type}</StyledTableCell>
              <StyledTableCell >{row.credit_hours}</StyledTableCell>
              <StyledTableCell ><select
                    value={section[i]}
                    onChange={(e) => {
                      setSection(e.target.value);
                    }}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select></StyledTableCell>
              <StyledTableCell >{row.status === "Registered" ? (
                    <button className="btn btn-primary" disabled>
                      Registered
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleRegister(cookies.username, row.course_code, section);
                      }}
                    >
                      Register
                    </button>
                  )}</StyledTableCell>
              <StyledTableCell >
              {row.status === "Registered" ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(cookies.username,row.course_code);
                      }}
                    >
                      Drop
                    </button>
                  ) : (
                    <button className="btn btn-danger" disabled>
                      Drop
                    </button>
                  )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          {/*<CourseRegistrationCard
            courses={offeredCourses}
            registerHandler={handleRegister}
            deleteHandler={handleDelete}
  />*/}
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
