import React from 'react';
import './WhoWeAreCard.css'; // Import the CSS file

const WhoWeAreCard = () => {
  return (
    <div className="container who-we-are-card-container">
      <div className="row who-we-are-card">
        <div className="col-md-6 col-12">
          <img src="your-image-url.jpg" alt="Who We Are" className="img-fluid who-we-are-image" />
        </div>
        <div className="col-md-6 col-12 d-flex align-items-center">
          <div className="who-we-are-text">
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam id nulla porttitor
              aliquet. Nam eu risus in erat volutpat pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCard;
