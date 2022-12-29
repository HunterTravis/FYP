import React from 'react';
import CourseCard from '../../Components/CourseCard/CourseCard';
import './Courses.css';

const dummyData = [
  {
    id: 1,
    courseName: 'Course 1',
    assignments: [
      { id: 1, name: 'Assignment 1' },
      { id: 2, name: 'Assignment 2' }
    ]
  },
  {
    id: 2,
    courseName: 'Course 2',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  // ... additional courses
];

function Courses() {
  return (
    <div className="courses">
      <h1>Courses</h1>
      <div className="course-cards">
        {dummyData.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;