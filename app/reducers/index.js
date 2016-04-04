import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './app';
import enterRegistrationReducer from './enterRegistration';
import step1Reducer from './step1';

export default combineReducers({
  routing: routerReducer,
  app: appReducer,
  enterRegistration: enterRegistrationReducer,
  step1: step1Reducer
});
