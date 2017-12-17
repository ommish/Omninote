import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { REMOVE_FLAG } from '../actions/flag_actions';
import { RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
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
    case RECEIVE_TAG:
    newState = Object.assign({}, oldState);
    action.tag.noteIds.forEach((noteId) => {
      newState[noteId].tagIds.push(action.tag.id);
    });
    return newState;
    case REMOVE_TAG:
    newState = Object.assign({}, oldState);
    action.tag.noteIds.forEach((noteId) => {
      newState[noteId].tagIds = newState[noteId].tagIds.filter((tagId) => tagId !== action.tag.id);
    });
    case REMOVE_FLAG:
    newState = Object.assign({}, oldState);
    action.flag.noteIds.forEach((noteId) => {
      newState[noteId].flagId = null;
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
