export const TOGGLE_DELETE_FORM = "TOGGLE_DELETE_FORM";
export const TOGGLE_CREATE_FORM = "TOGGLE_CREATE_FORM";
export const TOGGLE_NOTE_ORDER = "TOGGLE_NOTE_ORDER";
export const TOGGLE_SELECTED_NOTEBOOK = "TOGGLE_SELECTED_NOTEBOOK";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const TOGGLE_SIDEMENU = "TOGGLE_SIDEMENU";
export const TOGGLE_SIDEMENU_ITEM_TYPE =  "TOGGLE_SIDEMENU_ITEM_TYPE";

export const toggleModal = (modalName) => {
  return {
    type: TOGGLE_MODAL,
    modalName,
  };
};

export const toggleSidemenuItemType = (itemType) => {
  return {
    type: TOGGLE_SIDEMENU_ITEM_TYPE,
    itemType,
  };
};

export const toggleSidemenu = () => {
  return {
    type: TOGGLE_SIDEMENU,
  };
};

export const toggleSelectedNotebook = (notebookId, clicked) => {
  return {
    type: TOGGLE_SELECTED_NOTEBOOK,
    notebookId,
    clicked,
  };
};

export const toggleDeleteForm = (toDelete) => {
  return {
    type: TOGGLE_DELETE_FORM,
    toDelete,
  };
};

export const toggleCreateForm = (itemType) => {
  return {
    type: TOGGLE_CREATE_FORM,
    itemType,
  };
};

export const toggleNoteOrder = (order) => {
  return {
    type: TOGGLE_NOTE_ORDER,
    order,
  };
};
