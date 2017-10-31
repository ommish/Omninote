import { connect } from 'react-redux';
import Editor from './editor';
import { updateNote, createNote, receiveNoteErrors } from '../../actions/note_actions';
import { createTag, receiveTagErrors } from '../../actions/tag_actions';
import { toggleModal, toggleSelectedNotebook } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const note = ownProps.match.params.noteId ?
    state.entities.notes[parseInt(ownProps.match.params.noteId)] :
    { id: null, title: "", body: "", bodyPlain: "", notebookId: state.ui.selectedNotebook.id, tagIds: []};
  return {
    note,
    selectedNotebook: state.ui.selectedNotebook,
    fullEditor: state.ui.fullEditor,
    allTags: Object.values(state.entities.tags),
    tagInput: "",
    noteErrors: state.errors.noteErrors,
    tagErrors: state.errors.tagErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.params.noteId ? updateNote : createNote;
  return {
    action: (note) => dispatch(action(note)),
    toggleFullEditor: () => dispatch(toggleModal("fullEditor")),
    createTag: (tag) => dispatch(createTag(tag)),
    clearNoteErrors: () => dispatch(receiveNoteErrors([])),
    clearTagErrors: () => dispatch(receiveTagErrors([])),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
