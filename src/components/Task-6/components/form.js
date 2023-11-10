import "./formStyles.css";

import React from "react";

const form = () => {
  return (
    <div className="form">
      <form className="portfolioform">
        <label className="portfoliolabel">Your Name</label>
        <input type="text"></input>
        <label className="portfoliolabel">Email</label>
        <input type="email"></input>
        <label className="portfoliolabel">Submit</label>
        <input type="text"></input>
        <label className="portfoliolabel">Message</label>
        <textarea
          className="portfoliotextarea"
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default form;
