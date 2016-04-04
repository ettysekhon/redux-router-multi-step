import EnterRegistration from '../components/EnterRegistration';
import { getRegistrationCharge } from '../actions/enterRegistration.js';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (registration) => {
      dispatch(getRegistrationCharge(registration));
    }
  };
};

export default connect(() => {
  return {
  };
}, mapDispatchToProps)(EnterRegistration);
