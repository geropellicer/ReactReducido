import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import SumForm from "./SumForm";


const InfoDisplay = () => {

  const counter = useSelector(state => state.counterR);
  const loggedIn = useSelector(state => state.loggedR);

  return (
    <div className="component-container">
      <div className="InfoDisplay">
        { loggedIn ? <div><h1>Info display Works!</h1><h2>{counter}</h2></div> : <div><h4>Log In to view sensible information</h4></div> } 
        <SumForm/>
      </div>
    </div>
  );
};

export default InfoDisplay;
