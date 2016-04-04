import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import EnterRegistration from '../containers/EnterRegistration';
import Step1 from '../containers/Step1';
import Step2 from '../components/Step2';

const routes = (
  <Route
    component={App}
    path='/'
  >
    <IndexRoute component={EnterRegistration}/>
    <Route
      component={Step1}
      path='step-1'
    />
    <Route
      component={Step2}
      path='step-2'
    />
  </Route>
);

export default routes;
