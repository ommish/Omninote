import { RECEIVE_USER } from '../actions/';

const nullUser = {};

const SessionReducer = (oldState = nullUser, action) => {
  switch(action.type) {
    case RECEIVE_USER:
    return action.user;
  }
};
