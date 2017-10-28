import { connect } from 'react-redux';
import Editor from './editor';
import { updateNote, createNote } from '../../actions/note_actions';
import { toggleModal, toggleSelectedNotebook } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const note = state.ui.selectedNote.id ?
    state.ui.selectedNote :
    { title: "", body: {}, body_plain: "", notebook_id: null};
  const fullEditor = state.ui.fullEditor;
  return {
    note,
    fullEditor,
    selectedNotebook: state.ui.selectedNotebook,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname.includes("/notes/")) ? updateNote : createNote;
  return {
    action: (note) => dispatch(action(note)),
    toggleModal: (modalName) => dispatch(toggleModal(modalName)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
