import "./workCardStyles.css";
// import pro1 from '../assests/project1.png'
import React from "react";
import { NavLink } from "react-router-dom";

const workCard = (props) => {
  return (
    <div className="project-card">
      <img style={{ height: 250 }} src={props.imgsrc} alt="" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p className="portfoliop">{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="portfoliobtn">
            View
          </NavLink>
          <NavLink to={props.view} className="portfoliobtn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default workCard;
