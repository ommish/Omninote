import { RECEIVE_FLAG, REMOVE_FLAG, RECEIVE_FLAGS } from '../actions/flag_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_NOTE, RECEIVE_UPDATED_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { createMarkers, createMarker, removeMarker, addNoteToMarker, removeNoteFromMarker } from '../util/marker_util';

const initialState = {googleMap: null, markers: {}, infoWindow: null};

const MarkersReducer = (oldState = initialState, action) => {
  let newState = Object.assign({}, oldState);
  let newMarker;
  switch (action.type) {
    case RECEIVE_FLAGS:
    const newMarkers = createMarkers(action.flags, action.googleMap, action.infoWindow, action.notes);
    return {googleMap: action.googleMap, markers: newMarkers, infoWindow: action.infoWindow};
    case RECEIVE_FLAG:
    newMarker = createMarker(action.flag, newState.googleMap, newState.infoWindow);
    newState.markers[action.flag.id] = newMarker;
    return newState;
    case REMOVE_FLAG:
    removeMarker(newState.markers[action.flag.id]);
    delete newState.markers[action.flag.id];
    return newState;
    case RECEIVE_NEW_NOTE:
    if (action.flagId) {
      newMarker = addNoteToMarker(action.flagId, newState.markers[action.flagId], action.note);
      newState.markers[flag.id] = newMarker;
    }
    return newState;
    case RECEIVE_UPDATED_NOTE:
    if (action.flags) {
      Object.values(action.flags).forEach((flag) => {
        const oldNoteIds = Object.keys(newState.markers[flag.id].noteTitles);
        const newNoteIds = flag.noteIds.map((noteId) => noteId.toString());
        const noteId = action.note.id.toString();
        if (oldNoteIds.includes(noteId) && !newNoteIds.includes(noteId)) {
          newMarker = removeNoteFromMarker(flag.id, newState.markers[flag.id], action.note.id);
        } else if (!oldNoteIds.includes(noteId) && newNoteIds.includes(noteId)) {
          newMarker = addNoteToMarker(flag.id, newState.markers[flag.id], action.note);
        }
        newState.markers[flag.id] = newMarker;
      });
    }
    return newState;
    case REMOVE_NOTE:
    if (action.flagId) {
      newMarker = removeNoteFromMarker(action.flagId, newState.markers[action.flagId], action.noteId);
      newState.markers[action.flagId] = newMarker;
    }
    return newState;
    default:
    return oldState;
  }
};

export default MarkersReducer;
