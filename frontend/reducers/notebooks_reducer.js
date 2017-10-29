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
    return merge({}, oldState, action.notebook);
    case REMOVE_NOTEBOOK:
    newState = merge({}, oldState);
    delete newState[Object.keys(action.notebook)[0]];
    return newState;
    case RECEIVE_NOTE:
    newState = merge({}, oldState);
    debugger
    if (!newState[Object.values(action.note)[0].notebookId].noteIds.includes(parseInt(Object.keys(action.note)[0]))) {
      newState[Object.values(action.note)[0].notebookId].noteIds.push(Object.keys(action.note)[0]);
    }
    return newState;
    case REMOVE_NOTE:
    newState = merge({}, oldState);
    const noteId = Object.keys(action.note)[0];
    const notebookId = Object.values(action.note)[0].notebookId;
    newState[notebookId].noteIds = newState[notebookId].noteIds
      .filter((id) => id !== parseInt(noteId));
    return newState;
    default:
    return oldState;
  }
};

export default NotebooksReducer;
