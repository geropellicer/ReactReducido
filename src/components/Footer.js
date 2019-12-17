import React from "react";
import InfoDisplay from "./InfoDisplay";

const Footer = () => {
  return (
    <div className="component-container">
      <div className="footer">
        <div className="left">
          <h3>Footer Works!</h3>
        </div>
        <div className="center">
          <InfoDisplay/>
        </div>
        <div className="right">
          <h3>Copy 2019</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
