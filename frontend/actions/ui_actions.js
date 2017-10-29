export const TOGGLE_DELETE_FORM = "TOGGLE_DELETE_FORM";
export const TOGGLE_NOTE_ORDER = "TOGGLE_NOTE_ORDER";
export const TOGGLE_SELECTED_NOTEBOOK = "TOGGLE_SELECTED_NOTEBOOK";
export const TOGGLE_SELECTED_NOTE = "TOGGLE_SELECTED_NOTE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const TOGGLE_SIDEMENU = "TOGGLE_SIDEMENU";

export const toggleModal = (modalName) => {
  return {
    type: TOGGLE_MODAL,
    modalName,
  };
};

export const toggleSidemenu = () => {
  return {
    type: TOGGLE_SIDEMENU,
  };
};

export const toggleSelectedNotebook = (notebook) => {
  return {
    type: TOGGLE_SELECTED_NOTEBOOK,
    notebook,
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

export const toggleSelectedNote = (note) => {
  return {
    type: TOGGLE_SELECTED_NOTE,
    note,
  };
};
