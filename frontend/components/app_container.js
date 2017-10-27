import { connect } from 'react-redux';
import App from './app';
import { fetchAll } from '../actions/entity_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(fetchAll()),
  };
};

export default connect(null, mapDispatchToProps)(App);
