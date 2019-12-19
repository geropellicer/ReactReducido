import React from "react";
import InfoDisplay from "../components/InfoDisplay";

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-header">Welcome to HOME page!</h1>
      <div className="page-body">
        <InfoDisplay/>
      </div>
    </div>
  );
};

export default Home;
