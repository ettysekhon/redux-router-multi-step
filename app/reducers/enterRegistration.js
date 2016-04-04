import ActionTypes from '../actions/types.js';
import objectAssign from 'object-assign';

const enterRegistration = (state = {
  validationMessage: '',
  registration: '',
  complete: false
}, action) => {
  switch (action.type) {
  case ActionTypes.FETCHING_REGISTRATION_CHARGE:
    return objectAssign({}, state, {
      registration: action.registration,
      validationMessage: ''
    });
  case ActionTypes.INVALID_REGISTRATION:
    return objectAssign({}, state, {
      validationMessage: action.validationMessage,
      registration: action.registration
    });
  case ActionTypes.RECEIVE_REGISTRATION_CHARGE:
    return objectAssign({}, state, {
      complete: true
    });
  default:
    return state;
  }
};

export default enterRegistration;
