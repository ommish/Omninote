import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
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
    return Object.assign({}, action.notebooks);
    case RECEIVE_NOTEBOOK:
    newState = Object.assign({}, oldState);
    newState[action.notebook.id] = action.notebook;
    return newState;
    case REMOVE_NOTEBOOK:
    newState = Object.assign({}, oldState);
    delete newState[action.notebook.id];
    return newState;
    case RECEIVE_NOTE:
    return Object.assign({}, oldState, action.notebooks);
    case REMOVE_NOTE:
    return Object.assign({}, oldState, action.notebooks);
    default:
    return oldState;
  }
};

export default NotebooksReducer;
