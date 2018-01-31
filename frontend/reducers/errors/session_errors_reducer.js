import { RECEIVE_USER_ERRORS } from '../../actions/session_actions';

const initialState = [];
const SessionErrorsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
    return action.errors === undefined ? [] : action.errors;
    default:
    return oldState;
  }
};

export default SessionErrorsReducer;
