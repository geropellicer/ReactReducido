import React from "react";
import { Link } from "react-router-dom";
import InfoDisplay from "./InfoDisplay";
import LoginForm from "./LoginForm";

const Nav = () => {
  return (
    <div className="component-container">
      <div className="nav">
        <div className="left">
          <h1>Nav Works!</h1>
        </div>
        <div className="center">
          <InfoDisplay />
        </div>
        <div className="right">
          <ul className="topMenu">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/destroy">
              <li>Destroy this page</li>
            </Link>
            <li>
              <LoginForm />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
