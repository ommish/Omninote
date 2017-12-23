import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { withRouter } from 'react-router-dom';
import { toggleDeleteForm } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const bodySnippet = ownProps.note.bodyPlain.length < 100 ? ownProps.note.bodyPlain : ownProps.note.bodyPlain.concat("...");
  const notebook = state.entities.notebooks[ownProps.note.notebookId];

  return {
    notebook,
    bodySnippet
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm({ id, type: "note"})),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteIndexItem));
