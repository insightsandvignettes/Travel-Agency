// src/components/CarouselComponent.jsx
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel className=" w-full relative  top-96 mb-40 translate-y-80 " controls color='blue'>
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src="https://vignettesinsights.com/assets/images/slider2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className=' space-y-5 my-20'>
          <h3 className=' text-5xl '><strong>Opportunities for intending migrants </strong></h3>
          
          <div>
          <p className=' text-2xl'>V&amp;I will ensure your travel process </p>
          <p className=' text-2xl'>and preparation, is hassle free </p>
          </div>
          <Button variant="primary" className="carousel-button w-40 h-10 red-button">
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vignettesinsights.com/assets/images/slide1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className=' space-y-5 my-20'>
        <h3 className=' text-5xl '><strong>Let help you live </strong></h3>
        <p className=' text-5xl '><strong>your college dreams.</strong></p>
        
          
          <div>
          <p className=' text-2xl'>A Canadian study permit gives you </p>
          <p className=' text-2xl'>the permission to reside in Canada. </p>
          </div>
          <Button variant="primary" className="carousel-button  w-40 h-10  red-button">
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vignettesinsights.com/assets/images/slider3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className=' space-y-5 my-20'>
        <h3 className=' text-5xl '><strong>A promising future for a better environment.</strong></h3>
          
          <div>
          <p className=' text-2xl'>A Canadian study permit gives you </p>
          <p className=' text-2xl'>the permission to reside in Canada. </p>
          </div>
          <Button variant="primary" className="carousel-button w-40 h-10 red-button">
            Learn More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
