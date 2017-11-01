import { RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';
import { merge } from 'lodash';

const initialState = [];

const PhotoErrorsReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
    return action.errors === undefined ? [] : action.errors;
    default:
    return oldState;
  }
};

export default PhotoErrorsReducer;
