import React, { PropTypes } from 'react';

const SubmitButton = (props) => {
  return (
    <button
      onClick={props.onSubmit}
      type='submit'
    >
      Submit
    </button>
  );
};

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SubmitButton;
