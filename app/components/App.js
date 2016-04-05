import React, { PropTypes } from 'react';

const App = ({ children, isFetching }) => {
  return (
    <div data-component={'App'}>
      {isFetching &&
        <div>Fetching data...</div>
      }
      {
        children
      }
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
  isFetching: PropTypes.bool.isRequired
};

export default App;
