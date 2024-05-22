import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Consultation from './pages/Consultation';
import ContactUs from './pages/ContactUs';
import NewsChannel from './pages/NewsChannel';
import TestimonialCarousel from './components/TestimonialCarousel';
import HeroSection from './components/HeroSection';
import FooterComponent from './components/FooterComponent'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/news" element={<NewsChannel />} />
          </Routes>

         
        </main>
       
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
