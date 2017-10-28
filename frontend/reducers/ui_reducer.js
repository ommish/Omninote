import {
  TOGGLE_CREATE_FORM,
  TOGGLE_NOTE_ORDER,
  TOGGLE_DELETE_FORM,
  TOGGLE_SIDEMENU,
  TOGGLE_FULL_EDITOR,
  TOGGLE_NOTEBOOK_DROPDOWN,
  TOGGLE_NOTE_ORDER_DROPDOWN,
  TOGGLE_SELECTED_NOTEBOOK,
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
  sidemenu: false,
  createForm: false,
  deleteForm: {id: null},
  fullEditor: false,
  notebookDropdown: false,
  selectedNotebook: {id: null},
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
    case TOGGLE_SIDEMENU:
    newState = merge({}, oldState);
    newState.sidemenu = !(newState.sidemenu);
    return newState;

    case TOGGLE_CREATE_FORM:
    newState = merge({}, oldState);
    newState.createForm = !(newState.createForm);
    return newState;

    case TOGGLE_DELETE_FORM:
    newState = merge({}, oldState);
    newState.deleteForm.id = action.id;
    return newState;

    case TOGGLE_NOTE_ORDER:
    newState = merge({}, oldState);
    newState.noteOrder = action.order;
    return newState;

    case TOGGLE_NOTE_ORDER_DROPDOWN:
    newState = merge({}, oldState);
    newState.noteOrderDropdown = !newState.noteOrderDropdown;
    return newState;

    case TOGGLE_FULL_EDITOR:
    newState = merge({}, oldState);
    newState.fullEditor = !newState.fullEditor;
    return oldState;

    case TOGGLE_NOTEBOOK_DROPDOWN:
    newState = merge({}, oldState);
    newState.notebookDropdown = !newState.notebookDropdown;
    return newState;

    case TOGGLE_SELECTED_NOTEBOOK:
    newState = merge({}, oldState);
    newState.selectedNotebook = action.notebook;
    return newState;

    default:
    return oldState;
  }
};

export default UIReducer;
