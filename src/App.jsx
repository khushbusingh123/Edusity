// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Title from './Components/Title/Title';
import Course from './Components/Course/Course';
import CourseDetail from './Components/Course/CourseDetail'; // Correct import

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="WHAT WE OFFER" />
        <Programs />
        <About />
        <Course />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />
        <Title subtitle="CONTACT US" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
