import React from "react";
import {increment} from '../actions';
import {useDispatch} from 'react-redux';



const PlusButton = () => {

  const dispatch = useDispatch();

  return (
      <button onClick={() => dispatch(increment())}>+ button!</button>
  );
};

export default PlusButton;
