// TestimonialCarousel.js

import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import { Carousel} from 'react-bootstrap';

const TestimonialCarousel = () => {
  return (
   
       <Carousel className=' bg-red-700  text-black'>
       <div className=''>
       <p className=" font-bold text-center text-xl">WHAT OUR CLIENTS SAY ABOUT US</p>
      <p className=' text-center text-lg text-white'>At Insights & Vignettes Limited,<br/> we’ve built lasting relationships with many of our clients and <br/>they insist on using our services for their <br/> business travel needs as well as their personal holidays.</p>
      </div>
      <Carousel.Item>
     
      <div className='  justify-center items-center text-white'>
        <img src='https://vignettesinsights.com/assets/images/test1.png'  className=' w-8 h-8  items-center rounded-full'/>
        <h2 className=' font-bold'>Mr. Kolawole Bello</h2>

        <p>Excellent service provided by Insights &amp; Vignetts Limited and their resilient team from start to finish! We stayed in several hotels in Australia and had multiple flights and transfer but the whole experience was completely stress-free, so myself and my partner could relax and enjoy the holiday.</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
     
      <div className='  justify-center items-center text-white'>
        <img src='https://vignettesinsights.com/assets/images/test5.png'  className=' w-8 h-8  items-center rounded-full'/>
        <h2 className=' font-bold'>Mr. Chinedu Nwafor</h2>
        <p>  We have just returned from a superb holiday in South Africa. Thank you Insights &amp; Vignettes Limited's team. The hotel was beautiful. Thanks for organising all the assistance and walk in shower. All made for a fantastic holiday. The company that you suggested for our transfers to the airport were brilliant.  </p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
     
      <div className='  justify-center items-center text-white'>
        <img src='	https://vignettesinsights.com/assets/images/test2.png'  className=' w-8 h-8  items-center rounded-full'/>
        
        <h2 className=' font-bold'>Ms. Cynthia Ijele</h2>
        <p>            The most amazing travel company I have ever used. The staff are very prompt with any information you may need before or after you have booked. Nothing too much trouble. You are always greeted with a friendly and happy smile when you call into the shop. If you would like a beautiful trouble-free holiday I could not recommend this company highly enough."
                          </p>
      </div>
      </Carousel.Item>
    </Carousel>
  
   
  );
};

export default TestimonialCarousel;
