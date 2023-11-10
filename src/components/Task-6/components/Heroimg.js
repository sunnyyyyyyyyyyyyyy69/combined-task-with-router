import "./HeroimgStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import IntroImg from "../assests/intro-bg.jpg";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="portfoliop">HI,I'M A FREELANCER</p>
        <h1 className="portfolioh1">React Developer.</h1>
        <div>
          <Link to="/project" className="portfoliobtn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
