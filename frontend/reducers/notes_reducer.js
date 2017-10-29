import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

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
    newState = merge({}, oldState, action.notes);
    return newState;
    case REMOVE_NOTEBOOK:
    newState = merge({}, oldState);
    action.notes.forEach((noteId) => {
      delete newState[noteId];
    });
    return newState;
    case RECEIVE_NOTE:
    newState = merge({}, oldState);
    newState[action.note.id] = action.note;
    return newState;
    case REMOVE_NOTE:
    newState = merge({}, oldState);
    delete newState[action.note.id];
    return newState;
    default:
    return oldState;
    // case RECEIVE_NOTEBOOK:
    // newState = merge({}, oldState, action.notes);
    // return newState;
    // case RECEIVE_NOTES:
    // newState = merge({}, action.notes);
    // return newState;
  }
};

export default NotesReducer;
