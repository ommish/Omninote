import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Editor from './editor';
import { updateNote, createNote, receiveNoteErrors } from '../../actions/note_actions';
import { createTag, receiveTagErrors } from '../../actions/tag_actions';
import { toggleModal, toggleSelectedNotebook } from '../../actions/ui_actions';
import { createPhoto } from '../../actions/photo_actions';
import { sortItems } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  const note = ownProps.match.params.noteId ?
    state.entities.notes[parseInt(ownProps.match.params.noteId)] :
    { id: null, title: "", body: "", bodyPlain: "", notebookId: state.ui.selectedNotebook.id, tagIds: []};
  return {
    image: state.entities.photos,
    note,
    selectedNotebook: state.ui.selectedNotebook,
    fullEditor: state.ui.fullEditor,
    allTags: sortItems(Object.values(state.entities.tags), 4),
    tagInput: "",
    noteErrors: state.errors.noteErrors,
    tagErrors: state.errors.tagErrors,
    saved: false,
    timeUntilAutosave: null,
    autosaving: false,
    failedSave: false,
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
    createPhoto: (photoData) => dispatch(createPhoto(photoData)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
