import React, { PropTypes } from 'react';

const NavButton = (props) => {
  return (
    <button
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default NavButton;
