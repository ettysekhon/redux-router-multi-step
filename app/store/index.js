import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';

export const configureStore = (history, initialState) => {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger(),
    routerMiddleware(history)
  )(createStore);
  const configuredStore = createStoreWithMiddleware(reducers, initialState);
  return configuredStore;
};
