import { connect } from 'react-redux';
import App from './app';
import { fetchAll } from '../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  let notFound = false;
  if (ownProps.match.params.noteId && !state.entities.notes[ownProps.match.params.noteId] ||
    ownProps.match.params.notebookId && !state.entities.notebooks[ownProps.match.params.notebookId] ||
    ownProps.match.params.tagId && !state.entities.tags[ownProps.match.params.tagId]) {
      notFound = true;
    }
    return {
    initialState: state.entities.notes.initialState,
    itemType: state.ui.createForm.itemType,
    notFound,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
