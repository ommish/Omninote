import { combineReducers } from 'redux';
import NotebooksReducer from './notebooks_reducer';
import NotesReducer from './notes_reducer';

export default combineReducers({
  notebooks: NotebooksReducer,
  notes: NotesReducer,
});
