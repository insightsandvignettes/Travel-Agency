import './WhoWeAreCard.css'; // Import the CSS file
import { Card, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const WhoWeAreCard = () => {
  return (
    <div className="container mb-24 relative top-60">
      <div className="row d-flex align-items-stretch no-gutters py-5">
        <div className="col-md-6 d-flex flex-column p-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oo0tHTZ0hgXIfdUjC7TIeTOCXhUpvRBd3g&s"
            alt="Who We Are"
            className="img-fluid w-100 h-100"
          />
        </div>
        <div className="col-md-6 bg-gray-400 p-4 d-flex flex-column justify-content-center">
          <h2>Who We Are</h2>
          <p className="text-white">
            If you’re looking for an exceptional travel consulting service provider you can vouch for, you are in the right place. Insights & Vignettes Limited is an expert travel consulting firm situated in Lagos, Nigeria. We understand the pressure that comes with planning to relocate and we are committed to ensuring your travel application and preparation is hassle-free. Our wide range of knowledge, experience, and expertise ensures that you receive advice and representation that you can trust. We will listen to your concerns, seek to understand your needs, assess your options and help to develop an appropriate plan or solution to meet your goals.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="h-100 text-center hover:bg-black hover:text-white hover:animate-bounce">
            <CardBody>
              <FontAwesomeIcon icon={faGlobe} className="m-3" style={{ fontSize: 40, color: 'red' }} />
              <CardTitle>Vision</CardTitle>
              <CardSubtitle>Be the world’s most trusted and innovative travel management company.</CardSubtitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="h-100 text-center hover:bg-black hover:text-white hover:animate-bounce">
            <CardBody>
              <FontAwesomeIcon icon={faGlobe} className="m-3" style={{ fontSize: 40, color: 'red' }} />
              <CardTitle>Mission</CardTitle>
              <CardSubtitle>Helping people and companies travel smart and achieve more.</CardSubtitle>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="h-100 text-center hover:bg-black hover:text-white hover:animate-bounce">
            <CardBody>
              <FontAwesomeIcon icon={faGlobe} className="m-3" style={{ fontSize: 40, color: 'red' }} />
              <CardTitle>Core Values</CardTitle>
              <CardSubtitle>Solve it together | Give your best | Feed the future | Diversity and inclusion.</CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCard;
