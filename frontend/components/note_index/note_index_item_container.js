import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { withRouter } from 'react-router-dom';
import { toggleDeleteForm, toggleSelectedNotebook } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let bodySnippet = ownProps.note.bodyPlain || "";
  if (bodySnippet.length > 100) {
    bodySnippet = bodySnippet.slice(0, 100).concat("...");
  }
  const notebook = state.entities.notebooks[ownProps.note.notebookId];

  return {
    notebook,
    bodySnippet,
    noteErrors: state.errors.noteErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm({ id, type: "note"})),
    toggleSelectedNotebook: (notebook) => dispatch(toggleSelectedNotebook(notebook)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndexItem));
