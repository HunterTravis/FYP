import React from 'react';
import './CoursePage.css';
import { useLocation } from 'react-router-dom';
const CoursePage = ({ courseName, announcements, assignments, events, resources }) => {
  const location = useLocation();
  const { courseHead } = location.state;


  return (
    <div>
      {/* Course name */}
      <h1>{courseHead}</h1>

      
      {/* <h2>Announcements</h2>
      <ul>
        {announcements.slice(0, 3).map((announcement) => (
          <li>{announcement}</li>
        ))}
      </ul>

      
      <h2>Assignments</h2>
      <ul>
        {assignments.slice(0, 3).map((assignment) => (
          <li>{assignment}</li>
        ))}
      </ul>

      
      <h2>Course Stream</h2>
      <ul>
        {events.map((event) => (
          <li>{event}</li>
        ))}
      </ul>

      
      <div style={{ float: 'right', width: '30%' }}>
        <h2>Resources</h2>
        <ul>
          {resources.slice(0, 3).map((resource) => (
            <li>{resource}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default CoursePage;