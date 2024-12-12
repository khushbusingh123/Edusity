// src/App.jsx
import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Title from './Components/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subtitle="OUR PROGRAM" title="WHAT WE OFFER" />
        <Programs />

        <About />

        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />

        <Title subtitle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />

        <Title subtitle="CONTACT US" title="Get in Touch" />
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
