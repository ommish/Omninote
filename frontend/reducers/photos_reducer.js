import { RECEIVE_PHOTO } from '../actions/tag_actions';
import { merge } from 'lodash';

const initialState = {};

const PhotosReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTO:
    return action.photo;
    default:
    return oldState;
  }
};

export default PhotosReducer;
