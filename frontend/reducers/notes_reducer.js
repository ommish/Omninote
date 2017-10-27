import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { RECEIVE_NOTEBOOK } from '../actions/notebook_actions';
import { merge } from 'lodash';

const initialState = {};

const NotesReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
    newState = merge({}, oldState, action.notes);
    return newState;
    case RECEIVE_NOTES:
    newState = merge({}, action.notes);
    return newState;
    case RECEIVE_NOTE:
    return merge({}, oldState, action.note);
    case REMOVE_NOTE:
    newState = merge({}, oldState);
    const key = Object.keys(action.note)[0];
    delete newState[key];
    return newState;
    default:
    return oldState;
  }
};

export default NotesReducer;
