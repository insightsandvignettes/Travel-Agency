// src/pages/Services.jsx

import austrialia from '../assets/australia-removebg-preview.png'
import canada from '../assets/canada-removebg-preview.png'
import ireland from '../assets/ireland-removebg-preview.png'
import uk from '../assets/uk-removebg-preview.png'
import united_state from '../assets/united_state-removebg-preview.png'
import q from '../assets/q-removebg-preview.png'
const Services = () => {
  return (
    <div className='relative my-96 md:my-40 top-96 md:top-40 text-center space-y-5 m-20 '>
      <h2 className=' font-extrabold text-4xl '>Solutions for every travel program</h2>
      <p className=' font-medium text-2xl '>Our platforms for travel management are more than just a collection of technologies. They provide unique digital experiences for business stakeholders that take your business further.</p>
      <div className=' grid grid-cols-3 gap-4 md:mb-96'>
     <div className='space-y-3'>
     <div className=' border px-2 py-3 rounded-2xl  hover:bg-white  hover:animate-bounce ' style={{backgroundColor:'#E4E3F3'}} >
     <div className=' text-center space-y-8'>
     <div className=' justify-center items-center text-center relative left-5 md:left-28'>
          <img src={austrialia} alt='canada' className='  object-contain w-24'/>
          </div>
           <p className=' font-extrabold text-2xl'>Austrailia</p>
            <p>Our website offers free information on visiting, studying or working in and immigrating to Australia.</p>
            <p className=' hover:text-red-400  hover:animate-bounce'>LEARN MORE</p>
           </div>
          </div>
          <div className=' border px-2 py-3 rounded-2xl  hover:bg-white hover:animate-bounce duration-1000' style={{backgroundColor:'#E4E3F3'}}>
         
          <div className=' text-center space-y-8'>
          <div className=' justify-center items-center text-center relative left-5 md:left-28'>
          <img src={united_state} alt='united state' className='  object-contain w-20'/>
          </div>
           <p className=' font-extrabold text-2xl'>United States</p>
            <p>Our website offers free information on visiting, studying or working in and immigrating to United States.</p>
            <p className=' hover:text-red-400  hover:animate-bounce'>LEARN MORE</p>
           </div>
          </div>
     </div>
          <div className='space-y-3'>
          <div className=' border px-2 py-3 rounded-2xl  hover:bg-white  hover:animate-bounce' style={{backgroundColor:'#E4E3F3'}}>
           <div className=' text-center space-y-8'>
           <div className=' justify-center items-center text-center relative left-5 md:left-28'>
          <img src={uk} alt='canada' className='  object-contain w-24'/>
          </div>
           <p className=' font-extrabold text-2xl'>United Kingdom</p>
            <p>Our website offers free information on visiting, studying or working in and immigrating to UK.</p>
            <p className=' hover:text-red-400  hover:animate-bounce'>LEARN MORE</p>
           </div>
          </div>
          <div className=' border px-2 py-3 rounded-2xl  hover:bg-white hover:animate-bounce' style={{backgroundColor:'#E4E3F3'}}>
          <div className=' text-center space-y-8'>
          <div className=' justify-center items-center text-center relative left-5 md:left-28'>
          <img src={ireland} alt='canada' className='  object-contain w-24'/>
          </div>
           <p className=' font-extrabold text-2xl'>N.Ireland</p>
            <p>Our website offers free information on visiting, studying or working in and immigrating to N.Ireland.</p>
            <p className=' hover:text-red-400  hover:animate-bounce'>LEARN MORE</p>
           </div>
          </div>
          </div>
          <div className='space-y-3'>
          <div className=' border px-2 py-3 rounded-2xl  hover:bg-white  hover:animate-bounce' style={{backgroundColor:'#E4E3F3'}}>
          <div className=' text-center space-y-8'>
          <div className=' justify-center items-center text-center relative left-5 md:left-28'>
          <img src={canada} alt='canada' className='  object-contain w-24'/>
          </div>
          <p className=' font-extrabold text-2xl'>Canada</p>
            <p>Our website offers free information on visiting, studying or working in and immigrating to Canada..</p>
            <p className=' hover:text-red-400  hover:animate-bounce'>LEARN MORE</p>
           </div>
          </div>
          <div className=' border px-2 py-2 h-72  rounded-2xl hover:bg-white hover:animate-bounce' style={{backgroundColor:'#E4E3F3'}}>
          <div className=' text-center space-y-8'>
          <div className=' justify-center items-center text-center relative left-5 md:left-28'>
          <img src={q} alt='q' className='object-contain w-24'/>
          </div>
           <p>If you desire to migrate to other countries, contact us for details.</p>
           </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Services;
