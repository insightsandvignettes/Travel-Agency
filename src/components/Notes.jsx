// HeroSection.jsx
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
 faUserGroup
}from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody,  CardSubtitle, CardTitle } from 'react-bootstrap';
import {Container}from 'reactstrap';

const Notes = () => {
    return ( 
      <Container className="hero-section">
      <Container className='grid grid-cols-3 gap-1 relative top-80 mb-60 '>
    
        <Card className=' hover:bg-black hover:text-white'>
          <CardBody>
          <FontAwesomeIcon icon={faUserGroup}  className=' m-3' style={{fontSize:40}}/>
             <CardTitle>OUR SERVICES</CardTitle>
              <CardSubtitle>At Insights & Vignettes we want <br/> everything to run as smoothly as <br/>possible so we’ve made sure that you’ll <br/> only ever have one point of contact.</CardSubtitle>
              <Button className=' bg-red-600 my-4'>Learn More</Button>
          </CardBody>
        </Card>
     
     
     <Card  className=' hover:bg-black hover:text-white'>
     <CardBody>
          <FontAwesomeIcon icon={faUserGroup}  className=' m-3' style={{fontSize:40}}/>
             <CardTitle>OUR SERVICES</CardTitle>
              <CardSubtitle>At Insights & Vignettes we want <br/> everything to run as smoothly as <br/>possible so we’ve made sure that you’ll <br/> only ever have one point of contact.</CardSubtitle>
              <Button className=' bg-red-600 my-4'>Learn More</Button>
          </CardBody>
        </Card>
     
  
        <Card  className=' hover:bg-black hover:text-white'>
        <CardBody>
          <FontAwesomeIcon icon={faUserGroup}  className=' m-3' style={{fontSize:40}}/>
             <CardTitle>OUR SERVICES</CardTitle>
              <CardSubtitle>At Insights & Vignettes we want <br/> everything to run as smoothly as <br/>possible so we’ve made sure that you’ll <br/> only ever have one point of contact.</CardSubtitle>
              <Button className=' bg-red-600 my-4'>Learn More</Button>
          </CardBody>
          </Card>
    
      </Container>
       
      </Container>
    );
  };
  
  export default Notes;
  