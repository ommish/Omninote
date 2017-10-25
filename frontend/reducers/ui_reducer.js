import { TOGGLE_SIDEMENU, TOGGLE_FULL_EDITOR, TOGGLE_NOTEBOOK_DROPDOWN } from '../actions/ui_actions';
import { merge } from 'lodash';

const initialState = {
  sidemenu: false,
  fullEditor: false,
  notebookDropdown: false,
  notesOrder: { dateCreatedOldest: false,
    dateCreatedNewest: false,
    dateUpdatedOldest: false,
    dateUpdatedNewest: false,
    titleAsc: false,
    titleDesc: false
  },
  newAndDeleteForm: false,
};


const UIReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case TOGGLE_SIDEMENU:
    newState = merge({}, oldState);
    newState.sidemenu = !(newState.sidemenu);
    return newState;
    case TOGGLE_FULL_EDITOR:
    return;
    case TOGGLE_NOTEBOOK_DROPDOWN:
    return;
    default:
    return oldState;
  }
};

export default UIReducer;
