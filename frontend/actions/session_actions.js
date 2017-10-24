import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors: errors.responseJSON,
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionUtil.login(user).then((userRes) => {
      dispatch(receiveCurrentUser(userRes));
      dispatch(receiveUserErrors([]));
    },
    (userErrors) => dispatch(receiveUserErrors(userErrors))
  );};
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionUtil.signup(user).then((userRes) => {
      dispatch(receiveCurrentUser(userRes));
      dispatch(receiveUserErrors([]));
    },
    (userErrors) => dispatch(receiveUserErrors(userErrors))
  );};
};

export const logout = () => {
  return (dispatch) => {
    return SessionUtil.logout().then(() => {
      dispatch(receiveCurrentUser(null));
      dispatch(receiveUserErrors([]));
    },
    (errors) => dispatch(receiveUserErrors(errors))
  );};
};
