import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_FLAG, REMOVE_FLAG } from '../actions/flag_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const initialState = {};

const FlagsReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    if (!action.currentUser) {
      return initialState;
    } else {
      return oldState;
    }
    case RECEIVE_ALL_ENTITIES:
    return Object.assign({}, action.flags);
    case RECEIVE_FLAG:
    newState = Object.assign({}, oldState);
    newState[action.flag.id] = action.flag;
    return newState;
    case REMOVE_FLAG:
    newState = Object.assign({}, oldState);
    delete newState[action.flag.id];
    return newState;
    case RECEIVE_NOTE:
    return Object.assign({}, oldState, action.flags);
    case REMOVE_NOTE:
    return Object.assign({}, oldState, action.flags);
    default:
    return oldState;
  }
};

export default FlagsReducer;
