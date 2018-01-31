import { combineReducers } from 'redux';
import NotebooksReducer from './entities/notebooks_reducer';
import NotesReducer from './entities/notes_reducer';
import TagsReducer from './entities/tags_reducer';
import FlagsReducer from './entities/flags_reducer';
import MarkersReducer from './entities/markers_reducer';

export default combineReducers({
  notebooks: NotebooksReducer,
  notes: NotesReducer,
  tags: TagsReducer,
  flags: FlagsReducer,
  markers: MarkersReducer,
});
