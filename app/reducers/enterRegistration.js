import ActionTypes from '../actions/types.js';
import objectAssign from 'object-assign';

const enterRegistration = (state = {
  isInvalid: false,
  validationMessage: '',
  registration: ''
}, action) => {
  switch (action.type) {
  case ActionTypes.FETCHING_REGISTRATION_CHARGE:
    return objectAssign({}, state, {
      registration: action.registration,
      isInvalid: false,
      validationMessage: ''
    });
  case ActionTypes.INVALID_REGISTRATION:
    return objectAssign({}, state, {
      isInvalid: action.isInvalid,
      validationMessage: action.validationMessage,
      registration: action.registration
    });
  default:
    return state;
  }
};

export default enterRegistration;
