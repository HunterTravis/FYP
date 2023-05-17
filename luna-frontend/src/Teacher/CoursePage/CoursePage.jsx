import React, { useState, useEffect } from "react";
import "./CoursePage.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import ResourceCard from "../../Components/ResourceCard/ResourceCard";

const TeacherCoursePage = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const location = useLocation();
  const { courseHead, section } = location.state;

  const [announcements, setAnnouncements] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/TeacherCoursePage",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({courseCode:courseHead, section:section}),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setAnnouncements(data.announcements);
      setAssignments(data.assignments);
      setResources(data.resources);
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
                    <h5>{announcement.Title}</h5>
                    <p>{announcement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {assignments.map((assignment) => (
                <li>
                  <div>
                    <h5>{assignment.AssignmentName}</h5>
                    <p>{assignment.AssignmentDescription}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {resources.map((resource) => (
                <li>
                  <div>
                    <h5>{resource.ResourceName}</h5>
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
                    <h5>{announcement.Title}</h5>
                    <p>{announcement.Text}</p>
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
                        assignmentTitle: assignment.AssignmentName,
                        assignmentID: assignment.AssignmentID,
                        teacherID: cookies.username,
                      }}
                    >
                      <AssignmentCard
                        title={assignment.AssignmentName}
                        dueDate={assignment.DueDate}
                        description={assignment.description}
                        AssignmentID={assignment.AssignmentID}
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
          <div className="tab-pane fade" id="Resources" role="tabpanel">
            <ul>
              {resources.map((resource) => (
                <li>
                  <div>
                    <ResourceCard
                    resourceID={resource.ResourceID}
                      resourceName={resource.ResourceName}
                      resourceDescription={resource.description}
                      resourceLink={resource.ResourceURL}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
  );
};

export default TeacherCoursePage;
