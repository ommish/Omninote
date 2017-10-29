import { connect } from 'react-redux';
import Editor from './editor';
import { updateNote, createNote } from '../../actions/note_actions';
import { toggleModal, toggleSelectedNotebook } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const note = state.ui.selectedNote.id ?
    state.ui.selectedNote :
    { title: "", body: {}, body_plain: "", notebook_id: null};
  return {
    note,
    selectedNotebook: state.ui.selectedNotebook,
    fullEditor: state.ui.fullEditor,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname.includes("/notes/")) ? updateNote : createNote;
  return {
    action: (note) => dispatch(action(note)),
    toggleFullEditor: () => dispatch(toggleModal("fullEditor")),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
