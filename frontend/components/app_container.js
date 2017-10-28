import { connect } from 'react-redux';
import App from './app';
import { fetchAll } from '../actions/entity_actions';
import { toggleSelectedNotebook } from '../actions/ui_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(fetchAll()),
    toggleSelectedNotebook: (notebookId) => dispatch(toggleSelectedNotebook(notebookId)),
  };
};

export default connect(null, mapDispatchToProps)(App);
