import { RECEIVE_NOTEBOOK_ERRORS } from '../actions/notebook_actions';

const NotebookErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
    return action.errors === undefined ? [] : action.errors;
    default:
    return oldState;
  }
};

export default NotebookErrorsReducer;
