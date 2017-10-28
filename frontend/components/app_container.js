import { connect } from 'react-redux';
import App from './app';
import { fetchAll } from '../actions/entity_actions';
import { toggleSelectedNotebook, toggleSelectedNote } from '../actions/ui_actions';

const mapStateToProps = (state) => {
    return {
    notes: state.entities.notes,
    notebooks: state.entities.notebooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(fetchAll()),
    toggleSelectedNotebook: (notebook) => dispatch(toggleSelectedNotebook(notebook)),
    toggleSelectedNote: (note) => dispatch(toggleSelectedNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
