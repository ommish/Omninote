import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_NOTE, RECEIVE_UPDATED_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { merge } from 'lodash';

const NotebooksReducer = (oldState = {}, action) => {
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_ENTITIES:
    return action.notebooks ? Object.assign({}, action.notebooks) : {};
    case RECEIVE_NOTEBOOK:
    newState[action.notebook.id] = action.notebook;
    return newState;
    case REMOVE_NOTEBOOK:
    delete newState[action.notebook.id];
    return newState;
    case RECEIVE_NEW_NOTE:
    newState[action.note.notebookId].noteIds.push(action.note.id);
    return newState;
    case RECEIVE_UPDATED_NOTE:
    return Object.assign(newState, action.notebooks);
    case REMOVE_NOTE:
    newState[action.notebookId].noteIds = newState[action.notebookId].noteIds.filter((noteId) => noteId !== action.noteId);
    return newState;
    default:
    return oldState;
  }
};

export default NotebooksReducer;
