
import './WhoWeAreCard.css'; // Import the CSS file
import { CardBody,Card, CardTitle, CardSubtitle } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const WhoWeAreCard = () => {
  return (
    <div className=" translate-y-40">
      <div className="flex w-full who-we-are-card">
        <div className=" w-full h-full">
          <img src="https://vignettesinsights.com/assets/images/travel-guy%202.jpg" alt="Who We Are" className=" bg-cover w-96" />
        </div>
        <div className=" bg-gray-500 text-white">
          <div className="who-we-are-text">
            <h2>Who We Are</h2>
            <p>
            If you’re looking for an exceptional travel consulting service provider you can vouch for, you are in the right place. Insights & Vignettes Limited is an expert travel consulting firm situated in Lagos, Nigeria. We understand the pressure that comes with planning to relocate and we are committed to ensuring your travel application and preparation is hassle free. Our wide range of knowledge, experience and expertise ensures that you receive advice and representation that you can trust. We will listen to your concerns, seek to understand your needs, assess your options and help to develop an appropriate plan or solution to meet your goals.
            </p>
          </div>
        </div>
      </div>
      <div className='flex space-x-3  m-4 '>
    
        <Card className=' hover:bg-black hover:text-white hover:animate-bounce'>
          <CardBody> 
          <FontAwesomeIcon icon={faGlobe}  className=' m-3' style={{fontSize:40,color:'red'}}/>
             <CardTitle>Vision</CardTitle>
              <CardSubtitle>Be the world’s most trusted and innovative travel management company.</CardSubtitle>
             
          </CardBody>
        </Card>
        <Card className=' hover:bg-black hover:text-white hover:animate-bounce'>
          <CardBody>
          <FontAwesomeIcon icon={faGlobe}  className=' m-3 ' style={{fontSize:40,color:'red'}}/>
             <CardTitle>Mission</CardTitle>
              <CardSubtitle>Helping people and companies travel smart and achieve more.</CardSubtitle>
             
          </CardBody>
        </Card>
        <Card className=' hover:bg-black hover:text-white hover:animate-bounce'>
          <CardBody>
          <FontAwesomeIcon icon={faGlobe}  className=' m-3' style={{fontSize:40,color:'red'}}/>
             <CardTitle>Core Values</CardTitle>
              <CardSubtitle>Solve it together | Give your best | Feed the future | diversity and inclusion.</CardSubtitle>
             
          </CardBody>
        </Card>
      </div>
    
    </div>
  );
};

export default WhoWeAreCard;
