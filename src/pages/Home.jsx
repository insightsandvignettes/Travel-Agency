// src/pages/Home.jsx
import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import TestimonialCarousel from '../components/TestimonialCarousel';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <HeroSection /> 
      <TestimonialCarousel />
    </div>
    
  );
};

export default Home;
