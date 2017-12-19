import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Editor from './editor';
import { updateNote, createNote, receiveNoteErrors } from '../../actions/note_actions';
import { createTag, receiveTagErrors } from '../../actions/tag_actions';
import { createFlag, receiveFlagErrors } from '../../actions/flag_actions';
import { toggleModal, toggleSelectedNotebook } from '../../actions/ui_actions';
import { createPhoto } from '../../actions/photo_actions';
import { sortItems } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  let note;
  let flag;
  if (ownProps.match.params.noteId) {
    note = state.entities.notes[parseInt(ownProps.match.params.noteId)];
  } else {
    note = { id: null, title: "", body: "", bodyPlain: "", notebookId: state.ui.selectedNotebook.id, tagIds: [], flagId: null };
  }

  if (note.flagId) {
    flag = state.entities.flags[note.flagId];
  } else {
    flag = { id: null, placeId: null, title: "", lat: null, lng: null };
  }

  return {
    note,
    flag,
    selectedNotebook: state.ui.selectedNotebook,
    fullEditor: state.ui.fullEditor,
    allTags: sortItems(Object.values(state.entities.tags), 4),
    allFlags: Object.values(state.entities.flags),
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
    createFlag: (flag) => dispatch(createFlag(flag)),
    clearFlagErrors: () => dispatch(receiveFlagErrors([])),
    clearNoteErrors: () => dispatch(receiveNoteErrors([])),
    clearTagErrors: () => dispatch(receiveTagErrors([])),
    createPhoto: (photoData) => dispatch(createPhoto(photoData)),
    toggleMapView: () => dispatch(toggleModal("mapView")),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
