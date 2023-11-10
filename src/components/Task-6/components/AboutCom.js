import { Link } from "react-router-dom";
import "./AboutComStyles.css";
import React1 from "../assests/react1.jpg";
import React2 from "../assests/react2.webp";
import React from "react";

const AboutCom = () => {
  return (
    <div className="about">
      <div className="left wow">
        <h1 className="h1">Who Am I?</h1>
        <p className="p">
          Im a React Front End Developer.I am Creating responsive Secure
          Websites for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCom;
