import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const initialState = {initialState: {id: null, noteIds: [] }};

const NotebooksReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    if (!action.currentUser) {
      return initialState;
    } else {
      return oldState;
    }
    case RECEIVE_ALL_ENTITIES:
    newState = merge({}, action.notebooks);
    return newState;
    case RECEIVE_NOTEBOOK:
    newState = merge({}, oldState);
    newState[action.notebook.id] = action.notebook;
    return newState;
    case REMOVE_NOTEBOOK:
    newState = merge({}, oldState);
    delete newState[action.notebook.id];
    return newState;
    case RECEIVE_NOTE:
    newState = merge({}, oldState);
    // add note to notebook's noteIds
    if (!newState[action.note.notebookId].noteIds.includes(action.note.id)) {
      newState[action.note.notebookId].noteIds.push(action.note.id);
    }
    // remove note from previous notebook's noteIds
    if (action.note.prevNotebook) {
      newState[action.note.prevNotebook].noteIds =
        newState[action.note.prevNotebook].noteIds.filter((id) => id !== action.note.id);
    }
    return newState;
    case REMOVE_NOTE:
    newState = merge({}, oldState);
    const noteId = action.note.id;
    newState[action.note.notebookId].noteIds = newState[action.note.notebookId].noteIds
      .filter((id) => id !== (noteId));
    return newState;
    default:
    return oldState;
  }
};

export default NotebooksReducer;
