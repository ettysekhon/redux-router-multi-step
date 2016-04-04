import Step1 from '../components/Step1.js';
import step1Actions from '../actions/step1.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    amount: state.step1.chargeAmount,
    registration: state.enterRegistration.registration
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBack: () => {
      dispatch(step1Actions.onBack);
    },
    onNext: () => {
      dispatch(step1Actions.onNext);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1);
