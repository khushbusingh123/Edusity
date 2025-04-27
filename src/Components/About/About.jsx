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
        <h3>ABOUT OUR COURSES</h3>
        <h2>NURTURING TOMORROW'S LEADERS TODAY</h2>
        <p>
        Unlock your potential with flexible learning.
Gain real-world skills at your own pace.
Your success story starts here.
Explore, learn, and grow with us.
Discover courses that match your passion.
Turn your dreams into achievements.  </p> 
      </div>
    </div>
  );
};

export default About;
