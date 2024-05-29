// src/components/FooterComponent.jsx
import logo from '../assets/logo3-01.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo}  className=' w-20'/>
            <p>If you’re looking for an exceptional travel consulting <br/> service provider you can vouch for, you are in the right place.<br/> Insights & Vignettes Limited is an expert travel <br/>consulting firm situated in Lagos, Nigeria.</p>
          </div>
          <div className="col-md-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/consultation" className="text-white">Consultation</a></li>

            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@travelagency.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Travel St, Wanderlust City</li>
            </ul>
          </div>
         
        </div>
        <div className="text-center mt-3">
          &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
