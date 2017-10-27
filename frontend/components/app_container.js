import { connect } from 'react-redux';
import App from './app';
import { fetchNotebooks } from '../actions/notebook_actions';
import { fetchNotes } from '../actions/note_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => {
      dispatch(fetchNotebooks());
      dispatch(fetchNotes());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
