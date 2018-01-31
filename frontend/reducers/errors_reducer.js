import { combineReducers } from 'redux';
import SessionErrorsReducer from './errors/session_errors_reducer';
import NotebookErrorsReducer from './errors/notebook_errors_reducer';
import NoteErrorsReducer from './errors/note_errors_reducer';
import TagErrorsReducer from './errors/tag_errors_reducer';
import FlagErrorsReducer from './errors/flag_errors_reducer';

export default combineReducers({
  sessionErrors: SessionErrorsReducer,
  notebookErrors: NotebookErrorsReducer,
  noteErrors: NoteErrorsReducer,
  tagErrors: TagErrorsReducer,
  flagErrors: FlagErrorsReducer,
});
