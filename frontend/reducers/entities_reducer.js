import { combineReducers } from 'redux';
import NotebooksReducer from './notebooks_reducer';

export default combineReducers({
  notebooks: NotebooksReducer,
});
