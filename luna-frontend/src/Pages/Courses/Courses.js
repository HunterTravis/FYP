import React from 'react';
import CourseCard from '../../Components/CourseCard/CourseCard';
import './Courses.css';
import { Link } from 'react-router-dom';
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
  {
    id: 3,
    courseName: 'Course 3',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 4,
    courseName: 'Course 4',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 5,
    courseName: 'Course 5',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 6,
    courseName: 'Course 6',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 7,
    courseName: 'Course 7',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 8,
    courseName: 'Course 8',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 9,
    courseName: 'Course 9',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 11,
    courseName: 'Course 11',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 12,
    courseName: 'Course 12',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 13,
    courseName: 'Course 13',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 14,
    courseName: 'Course 14',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 15,
    courseName: 'Course 15',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
  {
    id: 16,
    courseName: 'Course 16',
    assignments: [
      { id: 3, name: 'Assignment 3' },
      { id: 4, name: 'Assignment 4' }
    ]
  },
];

function Courses(props) {
  const data = dummyData;
  return (
    <div className="courses">
      <div className="container">

        <h1>Courses</h1>
        <div className="course-cards mr-0">
          {data.map(course => (
            <Link to={{ pathname: '/coursePage', state: { courseId: course.id } }}>
              <CourseCard key={course.id} {...course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;