import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './AboutHeroSection.css'; // Make sure to create this CSS file

const AboutHeroSection = () => {
  return (
    <div className="hero-section mb-36 relative top-40 bg-red-600 text-center py-8">
      <Container fluid>
        <h1 className="display-4">Travel Smart. Achieve More</h1>
        <p className="lead">
          We give travelers innovative tools that keep them safe and productive and help them make good choices on the road. 
          We partner with travel and procurement leaders to simplify the complexities of business travel, drive savings and satisfaction, 
          and move whole companies toward their goals. In short, we help our clients travel smart and achieve more. We make this happen in 
          106 countries with a global client retention rate of 97%, the highest in the industry. For more information, book appointment.
        </p>
        <Button className="red-button" href="#learn-more">Learn More</Button>
      </Container>
    </div>
  );
};

export default AboutHeroSection;
