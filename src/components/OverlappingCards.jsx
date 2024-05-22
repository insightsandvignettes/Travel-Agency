// OverlappingCards.js
import React from 'react';

const OverlappingCards = () => {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-4 col-md-6 position-absolute top-0 start-50 translate-middle-x">
          <div className="card border">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is the content of card 1.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 position-absolute top-50 start-0 translate-middle-y">
          <div className="card border">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is the content of card 2.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 position-absolute top-100 start-50 translate-middle-x">
          <div className="card border">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is the content of card 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCards;
