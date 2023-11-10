import "./Heroimg2Styles.css";

import React from "react";

const Heroimg2 = (props) => {
  const heading = props.heading;
  const text = props.text;
  return (
    <div className="hero-img">
      <div className="heading">
        <h1 className="portfolioh1">{heading}</h1>
        <p className="portfoliop">{text}</p>
      </div>
    </div>
  );
};

export default Heroimg2;
