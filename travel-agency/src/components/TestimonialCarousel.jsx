// TestimonialCarousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
  return (
    <Carousel>
       <Carousel.Caption>
        <h3 className="testimonial-text">WHAT OUR CLIENTS SAY ABOUT US</h3>
      </Carousel.Caption>
      <Carousel.Item>
        <div className="testimonial-item">
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
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
  );
};

export default TestimonialCarousel;
