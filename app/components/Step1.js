import React, { PropTypes } from 'react';
import NavButton from './NavButton';

const Step1 = (props) => {
  const message = `The cost for ${props.registration} is ${props.amount}`;
  return (
    <div>
      <h2>Step 1</h2>
      <div>{message}</div>
      <NavButton
        onClick={props.onBack}
        text={'Back'}
      />
      <NavButton
        onClick={props.onNext}
        text={'Next'}
      />
    </div>
  );
};

Step1.propTypes = {
  amount: PropTypes.number,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  registration: PropTypes.string
};

export default Step1;
