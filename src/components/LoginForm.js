import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../actions';

const LoginForm = () => {
  const logged = useSelector(state => state.loggedR);
  const dispatch = useDispatch();

  return (
    <div className="component-container">
      {logged ? <button onClick={() => dispatch(logout())}> Log out</button> : <button onClick={() => dispatch(login())}> Log in</button>}
    </div>
  );
};

export default LoginForm;
