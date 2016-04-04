import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isFetching: state.app.isFetching
  };
};

export default connect(mapStateToProps, () => {
  return {
  };
})(App);
