import * as NotebookUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

export const receiveNotebook = (newNotebook) => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook: newNotebook,
  };
};

export const removeNotebook = (notebook) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebook,
  };
};

export const receiveNotebookErrors = (errors) => {
  return {
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors: errors.responseJSON,
  };
};

export const deleteNotebook = (notebookId) => {
  return (dispatch) => {
    return NotebookUtil.deleteNotebook(notebookId)
    .then((notebook) => dispatch(removeNotebook(notebook)));
  };
};

export const createNotebook = (notebook) => {
  return (dispatch) => {
    return NotebookUtil.createNotebook(notebook)
    .then((newNotebook) => dispatch(receiveNotebook(newNotebook)),
    (errors) => dispatch(receiveNotebookErrors(errors))
  );};
};

export const updateNotebook = (notebook) => {
  return (dispatch) => {
    return NotebookUtil.updateNotebook(notebook)
    .then((newNotebook) => dispatch(receiveNotebook(newNotebook)),
    (errors) => dispatch(receiveNotebookErrors(errors))
  );};
};
