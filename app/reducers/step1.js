import ActionTypes from '../actions/types.js';
import objectAssign from 'object-assign';

const step1 = (state = {
  chargeAmount: 0
}, action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_REGISTRATION_CHARGE:
    return objectAssign({}, state, {
      chargeAmount: action.charge.amount
    });
  default:
    return state;
  }
};

export default step1;
