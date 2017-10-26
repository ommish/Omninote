import { TOGGLE_CREATE_FORM, TOGGLE_DELETE_FORM, TOGGLE_SIDEMENU, TOGGLE_FULL_EDITOR, TOGGLE_NOTEBOOK_DROPDOWN } from '../actions/ui_actions';
import { merge } from 'lodash';

const initialState = {
  sidemenu: false,
  createForm: false,
  deleteForm: {id: null},
  fullEditor: false,
  notebookDropdown: false,
  notesOrder: { dateCreatedOldest: false,
    dateCreatedNewest: false,
    dateUpdatedOldest: false,
    dateUpdatedNewest: false,
    titleAsc: false,
    titleDesc: false
  },
};


const UIReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
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
    case TOGGLE_FULL_EDITOR:
    return oldState;
    case TOGGLE_NOTEBOOK_DROPDOWN:
    return oldState;
    default:
    return oldState;
  }
};

export default UIReducer;
