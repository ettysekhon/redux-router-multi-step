exports.step1 = (store) => {
  return (nextState, replace) => {
    const state = store.getState();
    if (!state.enterRegistration.complete) {
      replace('/');
    }
  };
};
