import * as TagUtil from '../util/notebook_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

export const receiveTag = (newTag) => {
  return {
    type: RECEIVE_TAG,
    tag: newTag
  };
};

export const removeTag = (tag) => {
  return {
    type: REMOVE_TAG,
    tag,
  };
};

export const receiveTagErrors = (errors) => {
  return {
    type: RECEIVE_TAG_ERRORS,
    errors: errors.responseJSON,
  };
};

export const deleteTag = (tagId) => {
  return (dispatch) => {
    return TagUtil.deleteTag(tagId)
    .then((tag) => dispatch(removeTag(tag)));
  };
};

export const createTag = (tag) => {
  return (dispatch) => {
    return TagUtil.createTag(tag)
    .then((newTag) => dispatch(receiveTag(newTag)),
    (errors) => dispatch(receiveTagErrors(errors))
  );};
};

export const updateTag = (tag) => {
  return (dispatch) => {
    return TagUtil.updateTag(tag)
    .then((newTag) => dispatch(receiveTag(newTag)),
    (errors) => dispatch(receiveTagErrors(errors))
  );};
};
