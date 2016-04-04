import ActionTypes from './types.js';
import { browserHistory } from 'react-router';

const PORT = process.env.PORT;

const routePush = (route) => {
  browserHistory.push(route);
};

const fetchingRegistrationCharge = (text) => {
  return {
    type: ActionTypes.FETCHING_REGISTRATION_CHARGE,
    registration: text
  };
};

const receiveRegistrationCharge = (registration, payload) => {
  return {
    type: ActionTypes.RECEIVE_REGISTRATION_CHARGE,
    charge: payload.charge,
    complete: true
  };
};

const invalidRegistration = (registration, validationMessage) => {
  return {
    type: ActionTypes.INVALID_REGISTRATION,
    registration,
    validationMessage
  };
};

export const getRegistrationCharge = (registration) => {
  return (dispatch) => {
    // TODO: create validator function
    if (registration.length > 3) {
      dispatch(fetchingRegistrationCharge(registration));
      fetch(`http://localhost:${PORT}/api/charge`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(receiveRegistrationCharge(registration, json.payload));
          routePush('/step-1');
        });
    } else {
      dispatch(invalidRegistration(registration,
        'Must be more than 3 characters'));
    }
  };
};
