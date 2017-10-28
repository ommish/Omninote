import { connect } from 'react-redux';
import Editor from './editor';
import { updateNote, createNote } from '../../actions/note_actions';
import { toggleFullEditor, toggleSelectedNotebook } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let note = { title: "", body: {}, body_plain: "", notebook_id: null};
  const fullEditor = state.ui.fullEditor;
  if (ownProps.match.params.noteId) {
    note = state.entities.notes[ownProps.match.params.noteId];
    note.body = JSON.parse(note.body);
  }
  return {
    note,
    fullEditor,
    selectedNotebook: state.ui.selectedNotebook,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.params.noteId ? updateNote : createNote;
  return {
    action: (note) => dispatch(action(note)),
    toggleFullEditor: () => dispatch(toggleFullEditor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
