
import newcs from '../assets/newcs.png'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faPlane,
 faPlus
} from '@fortawesome/free-solid-svg-icons'
import ConsultationForm from '../components/ConsultationForm'; // Adjust the path if necessary
import './Consultation.css'; // Ensure you have appropriate styles if needed

const Consultation = () => {
  return (
    <Container fluid className=" d-flex flex-column justify-content-center">
    <div className='grid grid-cols-2 relative -top-60'>
      <div>
      <img src={newcs} alt='newcs' className='bg-cover'/>
      </div>
      <div className=' space-y-7 relative top-2'>
        <p className=' font-extrabold text-2xl md:text-5xl'>CONSULTATION</p>
        <p className=' text-2xl'>We offer free information on visiting, studying, working and immigrating to the UK, Ireland, Canada, US & Australia.</p>
        <p className=' text-2xl'>We address many of the Frequently Asked Questions we encounter when working with clients.</p>
        <p className=' text-2xl'>For in-depth information on how to go about your registration with us, kindly fill the form to schedule an appointment with us, place a call or email us directly consultation@visionbeyondborder.com</p>
        <div className='flex border  bg-slate-100 w-96 h-5'><FontAwesomeIcon icon={ faPlus}/><p className=' relative left-6 font-thin text-xs'>HOW TO SCHEDULE AN APPOINTMENT WITH US</p></div>
      </div>
    </div>
      <Container className="content-container -top-40 relative md:-top-60 p-3">

        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <ConsultationForm />
          </Col>
          <Col lg={6} className="d-flex align-items-center justify-content-end">
          <div className="relative text-white m-4">
          <FontAwesomeIcon icon={faPlane} className=' w-8 text-8xl'/>
            <p className="relative  text-3xl ">
            We help people like you to explore traveling opportunities. We would love the chance to meet with you and talk about incredible offers.
            </p>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Consultation;
