// src/components/FooterComponent.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Travel Agency</h5>
            <p>Your trusted partner for amazing travel experiences.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@travelagency.com</li>
              <li>Phone: +123-456-7890</li>
              <li>Address: 123 Travel St, Wanderlust City</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
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
