import { RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/note_actions';

const initialState = {initialState: {id: false, noteIds: [] }};

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
    newState = Object.assign({}, oldState, action.tags);
    if (action.prevTags) {
      action.prevTags.forEach((tagId) => {
        newState[tagId].noteIds = newState[tagId].noteIds.filter((noteId) => noteId !== action.note.id);
      });
    }
    return newState;
    case REMOVE_NOTE:
    newState = Object.assign({}, oldState, action.tags);
    if (action.tags) {
      Object.keys(action.tags).forEach((tagId) => {
        newState[tagId].noteIds = newState[tagId].noteIds.filter((noteId) => noteId !== action.note.id);
      });
    }
    return newState;
    default:
    return oldState;
  }
};

export default TagsReducer;
