import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import NotebookErrorsReducer from './notebook_errors_reducer';
import NoteErrorsReducer from './note_errors_reducer';

export default combineReducers({
  sessionErrors: SessionErrorsReducer,
  notebookErrors: NotebookErrorsReducer,
  noteErrors: NoteErrorsReducer,
});
