import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_FLAG, REMOVE_FLAG } from '../actions/flag_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_NOTE, RECEIVE_UPDATED_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { merge } from 'lodash';

const FlagsReducer = (oldState = {}, action) => {
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_ENTITIES:
    return action.flags ? merge({}, action.flags) : {};
    case RECEIVE_FLAG:
    newState[action.flag.id] = action.flag;
    return newState;
    case REMOVE_FLAG:
    delete newState[action.flag.id];
    return newState;
    case RECEIVE_NEW_NOTE:
    if (action.note.flagId) {
      newState[action.note.flagId].noteIds.push(action.note.id);
    }
    return newState;
    case RECEIVE_UPDATED_NOTE:
    return merge(newState, action.flags);
    case REMOVE_NOTE:
    if (action.flagId) {
      newState[action.flagId].noteIds = newState[action.flagId].noteIds.filter((noteId) => noteId !== action.noteId);
    }
    return newState;
    default:
    return oldState;
  }
};

export default FlagsReducer;
