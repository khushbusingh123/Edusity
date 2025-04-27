// src/Components/Course/CourseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './course.css';

const CourseDetail = () => {
  const { id } = useParams();

  return (
    <div className="course-detail-container">
      <h1 className="course-detail-title">{id.replace(/-/g, ' ').toUpperCase()}</h1>
      <p className="course-detail-description">
        Welcome to our detailed course page for <strong>{id.replace(/-/g, ' ')}</strong>!
      </p>
      <p className="course-detail-content">
        This course will help you master important concepts, real-world projects, quizzes, and job-oriented skills.
        Enroll now and start your learning journey with us!
      </p>
    </div>
  );
};

export default CourseDetail;
