import { RECEIVE_TAG_ERRORS } from '../../actions/tag_actions';

const TagErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_TAG_ERRORS:
    return action.errors === undefined ? [] : action.errors;
    default:
    return oldState;
  }
};

export default TagErrorsReducer;
