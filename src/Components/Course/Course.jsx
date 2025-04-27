// src/Components/Course/Course.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './course.css';

const courses = [
  { id: 'web-development', title: 'Web Development' },
  { id: 'data-science', title: 'Data Science' },
  { id: 'graphic-design', title: 'Graphic Design' },
  { id: 'digital-marketing', title: 'Digital Marketing' },
  { id: 'artificial-intelligence', title: 'Artificial Intelligence' },
];

const Course = () => {
  return (
    <div className="course-container">
      <h2 className="course-heading">Our Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id} className="course-box">
            <h3>{course.title}</h3>
            <p>Click to explore more!</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Course;
