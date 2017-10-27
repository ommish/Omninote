import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { merge } from 'lodash';

const initialState = {};

const NotebooksReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ENTITIES:
    newState = merge({}, oldState, action.notebooks);
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
