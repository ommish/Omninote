import { RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import { RECEIVE_ALL_ENTITIES } from '../actions/entity_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_NOTE, RECEIVE_UPDATED_NOTE, REMOVE_NOTE } from '../actions/note_actions';
import { merge } from 'lodash';

const TagsReducer = (oldState = {}, action) => {
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return action.currentUser ? oldState : {};
    case RECEIVE_ALL_ENTITIES:
    return action.tags ? Object.assign({}, action.tags) : {};
    case RECEIVE_TAG:
    newState[action.tag.id] = action.tag;
    return newState;
    case REMOVE_TAG:
    delete newState[action.tag.id];
    return newState;
    case RECEIVE_NEW_NOTE:
    action.note.tagIds.forEach((tagId) => {
      newState[tagId].noteIds.push(action.note.id);
    });
    return newState;
    case RECEIVE_UPDATED_NOTE:
    return Object.assign(newState, action.tags);
    case REMOVE_NOTE:
    action.tagIds.forEach((tagId) => {
      newState[tagId].noteIds = newState[tagId].noteIds.filter((noteId) => noteId !== action.noteId);
    });
    return newState;
    default:
    return oldState;
  }
};

export default TagsReducer;
