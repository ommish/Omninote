import { RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const initialState = {initialState: {id: null, noteIds: [] }};

const TagsReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    if (!action.currentUser) {
      return initialState;
    } else {
      return oldState;
    }
    case RECEIVE_ALL_ENTITIES:
    return Object.assign({}, action.tags);
    case RECEIVE_TAG:
    newState = Object.assign({}, oldState);
    newState[action.tag.id] = action.tag;
    return newState;
    case REMOVE_TAG:
    newState = Object.assign({}, oldState);
    delete newState[action.tag.id];
    return newState;
    case RECEIVE_NOTE:
    return Object.assign({}, oldState, action.tags);
    case REMOVE_NOTE:
    return Object.assign({}, oldState, action.tags);
    default:
    return oldState;
  }
};

export default TagsReducer;
