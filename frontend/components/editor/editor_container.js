import { connect } from 'react-redux';
import Editor from './editor';
import { updateNote, createNote } from '../../actions/note_actions';
import { toggleModal, toggleSelectedNotebook } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const note = ownProps.match.params.noteId ?
    state.entities.notes[parseInt(ownProps.match.params.noteId)] :
    { title: "", body: {}, body_plain: "", notebook_id: state.ui.selectedNotebook.id};
  return {
    note,
    selectedNotebook: state.ui.selectedNotebook,
    fullEditor: state.ui.fullEditor,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.params.noteId ? updateNote : createNote;
  return {
    action: (note) => dispatch(action(note)),
    toggleFullEditor: () => dispatch(toggleModal("fullEditor")),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
