// src/pages/Home.jsx

import CarouselComponent from '../components/CarouselComponent';
import TestimonialCarousel from '../components/TestimonialCarousel';
import HeroSection from '../components/HeroSection';
import Notes from '../components/Notes';

const Home = () => {
  return (
    <div className=''>
      <CarouselComponent />
      <Notes/>
      <HeroSection /> 
      <TestimonialCarousel/>
    </div>
    
  );
};

export default Home;
