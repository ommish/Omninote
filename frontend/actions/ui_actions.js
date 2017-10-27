export const TOGGLE_SIDEMENU = "TOGGLE_SIDEMENU";
export const TOGGLE_FULL_EDITOR = "TOGGLE_FULL_EDITOR";
export const TOGGLE_NOTEBOOK_DROPDOWN = "TOGGLE_NOTEBOOK_DROPDOWN";
export const TOGGLE_DELETE_FORM = "TOGGLE_DELETE_FORM";
export const TOGGLE_CREATE_FORM = "TOGGLE_CREATE_FORM";
export const TOGGLE_NOTES_ORDER = "TOGGLE_NOTES_ORDER";

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

export const toggleDeleteForm = (id) => {
  return {
    type: TOGGLE_DELETE_FORM,
    id,
  };
};

export const togglenoteOrder = (order) => {
  return {
    type: TOGGLE_NOTES_ORDER,
    order,
  };
};
