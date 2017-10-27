import { RECEIVE_NOTE_ERRORS } from '../actions/note_actions';

const NoteErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
    return action.errors === undefined ? [] : action.errors;
    default:
    return oldState;
  }
};

export default NoteErrorsReducer;
