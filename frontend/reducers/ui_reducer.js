import {
  TOGGLE_MODAL,
  TOGGLE_NOTE_ORDER,
  TOGGLE_SELECTED_NOTEBOOK,
  TOGGLE_SELECTED_NOTE,
  TOGGLE_DELETE_FORM,
  TOGGLE_SIDEMENU,
} from '../actions/ui_actions';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export const _noteOrderOptions = [
  'Date Updated (newest first) ',
  'Date Created (newest first)',
  'Date Updated (oldest first)',
  'Date Created (oldest first)',
  'Title (ascending)',
  'Title (descending)'];

  const initialState = {
  initial: true,
  sidemenu: "hidden",
  createForm: false,
  deleteForm: {id: false},
  selectedNotebook: {id: null},
  selectedNote: {id: null},
  fullEditor: false,
  notebookDropdown: false,
  noteOrder: 0,
  noteOrderDropdown: false,
};

const UIReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    if (!action.currentUser) {
      return initialState;
    } else {
      return oldState;
    }
    case TOGGLE_MODAL:
    newState = merge({}, oldState);
    newState[action.modalName] = !(newState[action.modalName]);
    return newState;
    case TOGGLE_SIDEMENU:
    newState = merge({}, oldState);
    if (newState.sidemenu === "sidemenu-open") {
      newState.sidemenu = "closed-sidemenu";
    } else {
      newState.sidemenu = "sidemenu-open";
    }
    return newState;
    case TOGGLE_DELETE_FORM:
    newState = merge({}, oldState);
    newState.deleteForm.id = action.id;
    return newState;
    case TOGGLE_NOTE_ORDER:
    newState = merge({}, oldState);
    newState.noteOrder = action.order;
    return newState;

    case TOGGLE_SELECTED_NOTEBOOK:
    newState = merge({}, oldState);
    newState.selectedNotebook = action.notebook;
    return newState;

    case TOGGLE_SELECTED_NOTE:
    newState = merge({}, oldState);
    newState.selectedNote = action.note;
    return newState;

    default:
    return oldState;
  }
};

export default UIReducer;
