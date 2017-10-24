import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = { currentUser: null };

const SessionReducer = (oldState = nullUser, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    newState = merge({}, oldState);
    newState.currentUser = action.currentUser;
    return newState;
    default:
    return oldState;
  }
};

export default SessionReducer;
