export const TOGGLE_SIDEMENU = "TOGGLE_SIDEMENU";
export const TOGGLE_FULL_EDITOR = "TOGGLE_FULL_EDITOR";
export const TOGGLE_NOTEBOOK_DROPDOWN = "TOGGLE_NOTEBOOK_DROPDOWN";
export const TOGGLE_DELETE_FORM = "TOGGLE_DELETE_FORM";
export const TOGGLE_CREATE_FORM = "TOGGLE_CREATE_FORM";
export const TOGGLE_NOTE_ORDER = "TOGGLE_NOTE_ORDER";
export const TOGGLE_NOTE_ORDER_DROPDOWN = "TOGGLE_NOTE_ORDER_DROPDOWN";

export const toggleSidemenu = () => {
  return {
    type: TOGGLE_SIDEMENU,
  };
};

export const toggleCreateForm = () => {
  return {
    type: TOGGLE_CREATE_FORM,
  };
};

export const toggleNoteOrderDropdown = () => {
  return {
    type: TOGGLE_NOTE_ORDER_DROPDOWN,
  };
};

export const toggleDeleteForm = (id) => {
  return {
    type: TOGGLE_DELETE_FORM,
    id,
  };
};

export const toggleNoteOrder = (order) => {
  return {
    type: TOGGLE_NOTE_ORDER,
    order,
  };
};

export const toggleFullEditor = () => {
  return {
    type: TOGGLE_FULL_EDITOR,
  };
};
