import { browserHistory } from 'react-router';

const routePush = (route) => {
  browserHistory.push(route);
};

const onBack = (registration) => {
  routePush('/');
};

const onNext = (registration) => {
  routePush('/step-2');
};

export default {
  onBack,
  onNext
};
