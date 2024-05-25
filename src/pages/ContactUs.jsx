import { faMap, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, Button } from 'react-bootstrap';


const ContactUs = () => {
  return (
   

     <Container className="relative -top-52">
     <div className=' m-9 relative top-28'>
     <div className=' grid grid-cols-3 gap-2'>
      <div className=' px-2 py-2  rounded-xl shadow-lg hover:bg-black hover:text-white'>
      <div className='flex m-4 justify-center text-center  md:text-1xl'>
      <FontAwesomeIcon icon={faMap} className=' text-lg md:text-2xl text-red-500'/>
       <div>
       <p>11 Lateef Jakande Rd</p>
        <p>, Akindingbi, </p>
        <p>Lagos, Nigeria</p>
       </div>
      </div>
      </div>
      <div className=' px-2 py-2  rounded-xl shadow-lg  hover:bg-black hover:text-white'>
      <div  className='flex m-4 text-center justify-center  md:text-1xl '>
      <FontAwesomeIcon icon={ faPhone} className=' text-lg md:text-2xl text-red-500'/>
      <div>
      <p>0703 959 4474</p>
        <p>, 0809 448 9756</p>
      </div>
        
      </div>
      </div>
      <div className=' px-2 py-2  rounded-xl shadow-lg  hover:bg-black hover:text-white'>
      <div  className='flex m-4 text-center  justify-center  md:text-1xl'>
      <FontAwesomeIcon icon={ faMessage} className=' text-lg md:text-2xl text-red-500'/>
        <div>
        <p>mailconsultation@vignettesinsights.com</p>
        
        </div>
      </div>
      </div>
     </div>
     <h2 className=" mb-16 font-bold my-3 text-4xl">Book a Consultation</h2>
     <div className=' grid grid-cols-2'>
     <div className=' m-5 space-y-3  text-black'>
     <FontAwesomeIcon icon={ faMessage} />
      <p className=' font-bold text-4xl '>Send us a message!</p>
      <p  className='text-2xl '>Our Opening Hours*: Monday to Friday: 8am - 6pm Customer Care - Monday to Friday: 9am - 5pm. If you are interested in our consultation service and would like to know more, please feel free to give us a call (0703 959 4474, 0809 448 9756) as you will be connected to someone who knows the programme in question from first-hand experience.</p>
     </div>
     <div className=' bg-black px-2 py-3'>
     <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label> Message </Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="secondary" type="submit" className="mt-3 w-full bg-red-600 justify-center">
          Book Appointment
        </Button>
      </Form>
     </div>
     
     </div>
     </div>
    </Container>

  );
};

export default ContactUs;
