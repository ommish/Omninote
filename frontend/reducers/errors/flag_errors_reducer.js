import { RECEIVE_FLAG_ERRORS } from '../../actions/flag_actions';

const FlagErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_FLAG_ERRORS:
    return action.errors === undefined ? [] : action.errors;
    default:
    return oldState;
  }
};

export default FlagErrorsReducer;
