import * as FlagUtil from '../util/flag_api_util';

export const RECEIVE_FLAG  = 'RECEIVE_FLAG';
export const REMOVE_FLAG = 'REMOVE_FLAG';
export const RECEIVE_FLAG_ERRORS = 'RECEIVE_FLAG_ERRORS';
export const RECEIVE_FLAGS = 'RECEIVE_FLAGS';

export const receiveFlag = (newFlag) => {
  return {
    type: RECEIVE_FLAG,
    flag: newFlag,
  };
};

export const removeFlag = (flag) => {
  return {
    type: REMOVE_FLAG,
    flag,
  };
};

export const receiveFlagErrors = (errors) => {
  return {
    type: RECEIVE_FLAG_ERRORS,
    errors: errors.responseJSON,
  };
};

export const receiveFlags = (flags, googleMap, infoWindow, notes) => {
  return {
    type: RECEIVE_FLAGS,
    flags,
    googleMap,
    infoWindow,
    notes,
  };
;}


export const deleteFlag = (flagId, googleMap) => {
  return (dispatch) => {
    return FlagUtil.deleteFlag(flagId)
    .then((flag) => dispatch(removeFlag(flag, googleMap)));
  };
};

export const createFlag = (flag, googleMap) => {
  return (dispatch) => {
    return FlagUtil.createFlag(flag)
    .then((flag) => dispatch(receiveFlag(flag, googleMap)),
    (errors) => dispatch(receiveFlagErrors(errors))
  );};
};
