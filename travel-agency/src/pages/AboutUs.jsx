// src/pages/AboutUs.jsx
import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import WhoWeAreCard from '../components/WhoWeAreCard';
const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2>
      <WhoWeAreCard/>
      <AboutHeroSection/>
    </div>
  );
};

export default AboutUs;
