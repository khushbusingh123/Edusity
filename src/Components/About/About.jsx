import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About University" className='about-img' />
        <img src={play_icon} alt="Play Icon" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITIES</h3>
        <h2>NURTURING TOMORROW'S LEADERS TODAY</h2>
        <p>
          Our universities are committed to providing a nurturing environment for the leaders of the future. With top-notch facilities and a focus on holistic development, we pave the way for success.
        </p>
      </div>
    </div>
  );
};

export default About;
