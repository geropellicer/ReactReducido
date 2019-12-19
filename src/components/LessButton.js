import React from "react";
import {useDispatch} from 'react-redux';
import {decrement} from '../actions';

const LessButton = () => {
  const dispatch = useDispatch();

  return (
      <button onClick={() => dispatch(decrement())}>- button!</button>
  );
};

export default LessButton;
