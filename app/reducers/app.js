import ActionTypes from '../actions/types.js';
import objectAssign from 'object-assign';

const app = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
  case ActionTypes.FETCHING_REGISTRATION_CHARGE:
    return objectAssign({}, state, {
      isFetching: true
    });
  case ActionTypes.RECEIVE_REGISTRATION_CHARGE:
    return objectAssign({}, state, {
      isFetching: false
    });
  default:
    return state;
  }
};

export default app;
