import "./navbarStyles.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const HandleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="portfolioh1">Portfolio</h1>
      </Link>
      <ul className={click ? "navmenu active" : "navmenu"}>
        <li className="portfolioli">
          <Link to="/">Home</Link>
        </li>
        <li className="portfolioli">
          <Link to="/project">Project</Link>
        </li>
        <li className="portfolioli">
          <Link to="/about">About</Link>
        </li>
        <li className="portfolioli">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="ham" onClick={HandleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
