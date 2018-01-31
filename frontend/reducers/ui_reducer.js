import {
  TOGGLE_MODAL,
  TOGGLE_NOTE_ORDER,
  TOGGLE_SELECTED_NOTEBOOK,
  TOGGLE_DELETE_FORM,
  TOGGLE_SIDEMENU,
  TOGGLE_SIDEMENU_ITEM_TYPE,
  TOGGLE_CREATE_FORM,
} from '../actions/ui_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const initialState = {
  initial: true,
  sidemenu: "hidden",
  sidemenuItemType: "notebook",
  createForm: {itemType: ""},
  deleteForm: {id: null, type: ""},
  logoutForm: false,
  selectedNotebook: {id: null, clicked: false},
  fullEditor: false,
  notebookDropdown: false,
  noteOrder: 0,
  noteOrderDropdown: false,
  mapView: false,
};

const UIReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return action.currentUser ? oldState : {};
    case TOGGLE_SIDEMENU_ITEM_TYPE:
    newState = merge({}, oldState);
    if (action.itemType === "notebook") {
      newState.sidemenuItemType = "notebook";
    } else {
      newState.sidemenuItemType = "tag";
    }
    return newState;
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
    newState.deleteForm = action.toDelete;
    return newState;
    case TOGGLE_CREATE_FORM:
    newState = merge({}, oldState);
    newState.createForm.itemType = action.itemType;
    return newState;
    case TOGGLE_NOTE_ORDER:
    newState = merge({}, oldState);
    newState.noteOrder = action.order;
    return newState;
    case TOGGLE_SELECTED_NOTEBOOK:
    newState = merge({}, oldState);
    newState.selectedNotebook.id = action.notebookId;
    newState.selectedNotebook.clicked = action.clicked;
    return newState;
    default:
    return oldState;
  }
};

export default UIReducer;
