/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
  return (
    <Carousel className='bg-red-700 text-black'>
      <div className='px-4 md:px-8 lg:px-16 py-8'>
        <p className="font-bold text-center text-xl md:text-2xl lg:text-3xl">WHAT OUR CLIENTS SAY ABOUT US</p>
        <p className='text-center text-lg md:text-xl lg:text-2xl text-white'>
          At Insights & Vignettes Limited,<br/>
          we’ve built lasting relationships with many of our clients and<br/>
          they insist on using our services for their<br/>
          business travel needs as well as their personal holidays.
        </p>
      </div>
      <Carousel.Item>
        <div className='flex flex-col items-center text-white px-4 md:px-8 lg:px-16'>
          <img src='https://vignettesinsights.com/assets/images/test1.png' className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full' alt="Mr. Kolawole Bello" />
          <h2 className='font-bold text-lg md:text-xl lg:text-2xl mt-4'>Mr. Kolawole Bello</h2>
          <p className='mt-2 text-center'>
            Excellent service provided by Insights &amp;<br/> Vignetts Limited and their resilient team from start to finish!<br/>
            We stayed in several hotels in Australia and had multiple flights and<br/> transfers but the whole experience was completely stress-free,<br/>
            so myself and my partner could relax and enjoy the holiday.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex flex-col items-center text-white px-4 md:px-8 lg:px-16'>
          <img src='https://vignettesinsights.com/assets/images/test5.png' className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full' alt="Mr. Chinedu Nwafor" />
          <h2 className='font-bold text-lg md:text-xl lg:text-2xl mt-4'>Mr. Chinedu Nwafor</h2>
          <p className='mt-2 text-center'>
            We have just returned from a superb holiday in South Africa.<br/> Thank you Insights &amp; Vignettes Limited's team.<br/>
            The hotel was beautiful. Thanks for organising all the assistance and walk in shower.<br/> All made for a fantastic holiday.
            The company that you suggested for our transfers to the airport were brilliant.
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='flex flex-col items-center text-white px-4 md:px-8 lg:px-16'>
          <img src='https://vignettesinsights.com/assets/images/test2.png' className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full' alt="Ms. Cynthia Ijele" />
          <h2 className='font-bold text-lg md:text-xl lg:text-2xl mt-4'>Ms. Cynthia Ijele</h2>
          <p className='mt-2 text-center'>
            The most amazing travel company I have ever used.<br/> The staff are very prompt with any information you may need before or after you have booked.<br/>
            Nothing too much trouble. You are always greeted with a friendly and happy smile when you call into the shop.<br/>
            If you would like a beautiful trouble-free holiday I could not recommend this company highly enough.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default TestimonialCarousel;
