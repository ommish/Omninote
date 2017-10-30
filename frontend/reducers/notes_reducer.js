import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { REMOVE_TAG } from '../actions/tag_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {};

const NotesReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    if (!action.currentUser) {
      return initialState;
    } else {
      return oldState;
    }
    case RECEIVE_ALL_ENTITIES:
    newState = Object.assign({}, action.notes);
    return newState;
    case REMOVE_NOTEBOOK:
    newState = Object.assign({}, oldState);
    action.notebook.noteIds.forEach((noteId) => {
      delete newState[noteId];
    });
    return newState;
    case REMOVE_TAG:
    newState = Object.assign({}, oldState);
    action.tag.noteIds.forEach((noteId) => {
      delete newState[noteId];
    });
    return newState;
    case RECEIVE_NOTE:
    newState = Object.assign({}, oldState);
    newState[action.note.id] = action.note;
    return newState;
    case REMOVE_NOTE:
    newState = Object.assign({}, oldState);
    delete newState[action.note.id];
    return newState;
    default:
    return oldState;
  }
};

export default NotesReducer;
