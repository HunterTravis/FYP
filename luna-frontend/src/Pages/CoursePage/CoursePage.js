import React from "react";
import "./CoursePage.css";
import { useLocation, Link } from "react-router-dom";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";

const CoursePage = () => {
  const location = useLocation();
  const { courseHead } = location.state;

  const announcements = [
    {
      id: 1,
      title: "Announcement 1",
      description: "This is the first announcement",
    },
    {
      id: 2,
      title: "Announcement 2",
      description: "This is the second announcement",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Assignment 1",
      description: "This is the first assignment",
      dueDate: "23 Mar",
    },
    {
      id: 2,
      title: "Assignment 2",
      description: "This is the second assignment",
      dueDate: "05 Apr",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Resource 1",
      description: "This is the first resource",
    },
    {
      id: 2,
      title: "Resource 2",
      description: "This is the second resource",
    },
  ];

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
                      to="/assignmentSubmission"
                      // state={{ assignmentTitle: assignment.title }}
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
                    <h5>{resource.title}</h5>
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
