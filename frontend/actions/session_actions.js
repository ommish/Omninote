import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors,
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionUtil.login(user).then((newUser) => dispatch(receiveUser(newUser)),
    (userErrors) => dispatch(receiveUserErrors)
  );};
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionUtil.signup(user).then((newUser) => dispatch(receiveUser(newUser)),
    (userErrors) => dispatch(receiveUserErrors)
  );};
};

export const logout = () => {
  return (dispatch) => {
    return SessionUtil.logout().then(() => {},
    (errors) => dispatch(receiveUserErrors(errors))
  );};
};
