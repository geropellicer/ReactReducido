 import counterReducer from './counter';
 import loggedReducer from './isLogged';
 import {combineReducers} from 'redux';
 
 const allReducers = combineReducers({
     counterR: counterReducer,
     loggedR: loggedReducer
 })

 export default allReducers;