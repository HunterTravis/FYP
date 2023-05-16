import React, { useState, useEffect } from "react";
import "./CoursePage.css";
import { useCookies } from "react-cookie";
import { useLocation, Link } from "react-router-dom";
import { mockCoursePage } from "../../data/teacherCoursePage";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import ResourceCard from "../../Components/ResourceCard/ResourceCard";

const TeacherCoursePage = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const location = useLocation();
  const { courseHead } = location.state;

  const [announcements, setAnnouncements] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setAnnouncements(mockCoursePage.announcements);
    setAssignments(mockCoursePage.assignments);
    setResources(mockCoursePage.resources);
    console.log(mockCoursePage.announcements);
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
                    <h5>{announcement.title}</h5>
                    <p>{announcement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {assignments.map((assignment) => (
                <li>
                  <div>
                    <h5>{assignment.title}</h5>
                    <p>{assignment.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {resources.map((resource) => (
                <li>
                  <div>
                    <h5>{resource.title}</h5>
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
                    <h5>{announcement.title}</h5>
                    <p>{announcement.description}</p>
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
                      to="/teacher-assignment-submission"
                      state={{
                        assignmentTitle: assignment.title,
                        assignmentID: assignment.id,
                        teacherID: cookies.username,
                      }}
                    >
                      <AssignmentCard
                        title={assignment.title}
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
                    <ResourceCard
                      resourceName={resource.name}
                      resourceDescription={resource.description}
                      resourceLink={resource.url}
                    />
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

export default TeacherCoursePage;
