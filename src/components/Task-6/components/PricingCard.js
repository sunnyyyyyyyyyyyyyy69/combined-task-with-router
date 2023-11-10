import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="price">
        <div className="price-child p">Price</div>
      </div>
      <div className="card-container">
        <div className="card">
          <h3 className="p">- Basic -</h3>
          <span className="bar"></span>
          <p className="btc p">Rs.1999/-</p>
          <p className="p">- 3 days -</p>
          <p className="p">- 3 Pages -</p>
          <p className="p">- Featured -</p>
          <p className="p">- Responsive Design -</p>
          <Link to="/contact" className="btn btn1">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3 className="p">- Premium -</h3>
          <span className="bar"></span>
          <p className="btc p">Rs.2999/-</p>
          <p className="p">- 2 days -</p>
          <p className="p">- 5 Pages -</p>
          <p className="p">- Featured -</p>
          <p className="p">- Responsive Design -</p>
          <Link to="/contact" className="btn btn1">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3 className="p">- Business -</h3>
          <span className="bar"></span>
          <p className="btc p">Rs.4999/-</p>
          <p className="p">- 3 days -</p>
          <p className="p">- 8 Pages -</p>
          <p>- Featured -</p>
          <p className="p">- Responsive Design -</p>
          <Link to="/contact" className="btn btn1">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
