import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {initialState: true};

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
    case RECEIVE_NOTEBOOKS:
    newState = merge({}, action.notebooks);
    return newState;
    case RECEIVE_NOTEBOOK:
    return merge({}, oldState, action.notebook);
    case REMOVE_NOTEBOOK:
    newState = merge({}, oldState);
    const key = Object.keys(action.notebook)[0];
    delete newState[key];
    return newState;
    default:
    return oldState;
  }
};

export default NotebooksReducer;
