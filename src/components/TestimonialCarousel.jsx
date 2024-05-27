// TestimonialCarousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
  return (
    <div  className=' bg-red-700'>
       <Carousel>
       <Carousel.Caption>
        <h3 className="testimonial-text">WHAT OUR CLIENTS SAY ABOUT US</h3>
      </Carousel.Caption>
      <Carousel.Item>
        <div className="testimonial-item">
          <p className="testimonial-text">
          At Insights & Vignettes, we’ve built lasting relationships with many of our clients and they insist on using our services for their business travel needs as well as their personal holidays.
          </p>
          <p className="testimonial-author">John Doe</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-item">
          <p className="testimonial-text">
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur."
          </p>
          <p className="testimonial-author">Jane Doe</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-item">
          <p className="testimonial-text">
            "Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
          </p>
          <p className="testimonial-author">Alice Smith</p>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
   
  );
};

export default TestimonialCarousel;
