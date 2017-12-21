import { RECEIVE_NEW_NOTE, RECEIVE_UPDATED_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { REMOVE_FLAG } from '../actions/flag_actions';
import { RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {initialState: true};

const NotesReducer = (oldState = initialState, action) => {
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_ENTITIES:
    return action.notes ? Object.assign({}, action.notes) : {};
    case REMOVE_NOTEBOOK:
    action.notebook.noteIds.forEach((noteId) => {
      delete newState[noteId];
    });
    return newState;
    case RECEIVE_TAG:
    action.tag.noteIds.forEach((noteId) => {
      newState[noteId].tagIds.push(action.tag.id);
    });
    return newState;
    case REMOVE_TAG:
    action.tag.noteIds.forEach((noteId) => {
      newState[noteId].tagIds = newState[noteId].tagIds.filter((tagId) => tagId !== action.tag.id);
    });
    return newState;
    case REMOVE_FLAG:
    action.flag.noteIds.forEach((noteId) => {
      newState[noteId].flagId = null;
    });
    return newState;
    case RECEIVE_NEW_NOTE:
    newState[action.note.id] = action.note;
    return newState;
    case RECEIVE_UPDATED_NOTE:
    newState[action.note.id] = action.note;
    return newState;
    case REMOVE_NOTE:
    delete newState[action.noteId];
    return newState;
    default:
    return oldState;
  }
};

export default NotesReducer;
