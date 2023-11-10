import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p className="portfoliop">Bangalore</p>
              <p className="portfoliop">Karnataka</p>
            </div>
          </div>
          <div className="phone">
            <h4 className="portfolioh4">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1234567890
            </h4>
          </div>
          <div className="email">
            <h4 className="portfolioh4">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              chethan.nv3939@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4 className="portfolioh4">About the Company</h4>
          <p className="portfoliop">
            This is me Chethan N V.I like the challenges in the new projects and
            design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="portfoliop">
          Copyright @2023 Chethan N V .All rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
