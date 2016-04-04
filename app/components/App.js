import React, { PropTypes } from 'react';

const App = ({ children, isFetching }) => {
  return (
    <div>
      <div>
      <h1>Congestion Charge</h1>
      {isFetching &&
        <div>Fetching...</div>
      }
      {
        children
      }
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
  isFetching: PropTypes.bool.isRequired
};

export default App;
