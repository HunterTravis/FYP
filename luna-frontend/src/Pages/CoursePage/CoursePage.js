import React, { useEffect } from "react";
import "./CoursePage.css";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";

const CoursePage = () => {
  
  const [cookies, setCookie] = useCookies(["user"]);
  const [data, setData] = useState([]);
  const location = useLocation();
  let announcements = [];
  let assignments = [];
  let resources = [];

  const { courseHead, section } = location.state;
  useEffect(() => {
    fetch("http://localhost:3001/coursePage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username:cookies.username, courseCode:courseHead, section:section })})
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          announcements=data.announcements;
          assignments=data.assignments;
          resources=data.resources;
          console.log(announcements, assignments, resources);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);


  

  return (
    <div className="course-page">
      <div className="container">
        {/* Course name */}
        <h1>{courseHead}</h1>
        <div className="course-page__content-list">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="course-stream"
                data-bs-toggle="tab"
                href="#Stream"
                role="tab"
                aria-controls="Stream"
                aria-selected="true"
              >
                Course Stream
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="announcements"
                data-bs-toggle="tab"
                href="#Announcements"
                role="tab"
                aria-controls="Announcements"
                aria-selected="false"
              >
                Announcements
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="assignments"
                data-bs-toggle="tab"
                href="#Assignments"
                role="tab"
                aria-controls="Assignments"
                aria-selected="false"
              >
                Assignments
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="resources"
                data-bs-toggle="tab"
                href="#Resources"
                role="tab"
                aria-controls="Resources"
                aria-selected="false"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane show active" id="Stream" role="tabpanel">
            <ul>
              {announcements.map((announcement) => (
                <li>
                  <div>
                    <h5>Announcement: {announcement.id}</h5>
                    <p>{announcement.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {assignments.map((assignment) => (
                <li>
                  <div>
                    <h5>{assignment.name}</h5>
                    <p>{assignment.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {resources.map((resource) => (
                <li>
                  <div>
                    <h5>{resource.name}</h5>
                    <p>{resource.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-pane fade" id="Announcements" role="tabpanel">
            <ul>
              {announcements.map((announcement) => (
                <li>
                  <div>
                    <h5>Announcement: {announcement.id}</h5>
                    <p>{announcement.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-pane fade" id="Assignments" role="tabpanel">
            <ul>
              {assignments.map((assignment) => (
                <li>
                  <div>
                    <Link
                      to="/assignmentSubmission"
                      state={{
                        assignmentTitle: assignment.name,
                        assignmentDescription: assignment.description,
                        assignmentDueDate: assignment.dueDate,
                      }}
                    >
                      <AssignmentCard
                        title={assignment.name}
                        dueDate={assignment.dueDate}
                      />
                    </Link>
                    {/* <h5>{}</h5>
                    <p>{assignment.description}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-pane fade" id="Resources" role="tabpanel">
            <ul>
              {resources.map((resource) => (
                <li>
                  <div>
                    <h5>{resource.name}</h5>
                    <p>{resource.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
