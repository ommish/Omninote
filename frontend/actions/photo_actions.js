import * as PhotoUtil from '../util/photo_api_util';
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

export const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo,
  };
};

export const receivePhotoErrors = (errors) => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors: errors.responseJSON,
  };
};

export const createPhoto = (photoData) => {
  return (dispatch) => {
    return PhotoUtil.createPhoto(photoData)
      .then((photo) => dispatch(receivePhoto(photo)),
      (errors) => dispatch(receivePhotoErrors(errors))
  );};
};
