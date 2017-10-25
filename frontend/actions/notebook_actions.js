import * as NotebookUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

export const receiveNotebooks = (notebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks,
  };
};

export const receiveNotebook = (notebookRes) => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook: notebookRes.notebook,
  };
};

export const removeNotebook = (notebookRes) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebook: notebookRes.notebook,
  };
};

export const receiveNotebookErrors = (errors) => {
  return {
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors: errors.responseJSON,
  };
};

export const fetchNotebooks = () => {
  return (dispatch) => {
    return NotebookUtil.fetchNotebooks()
    .then((notebooks) => dispatch(receiveNotebooks(notebooks)));
  };
};

export const fetchNotebook = (notebookId) => {
  return (dispatch) => {
    return NotebookUtil.fetchNotebook(notebookId)
    .then((notebookRes) => dispatch(receiveNotebook(notebookRes)));
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
    .then((notebookRes) => dispatch(receiveNotebook(notebookRes)),
    (errors) => dispatch(receiveNotebookErrors(errors))
  );};
};

export const updateNotebook = (notebook) => {
  return (dispatch) => {
    return NotebookUtil.updateNotebook(notebook)
    .then((notebookRes) => dispatch(receiveNotebook(notebookRes)),
    (errors) => dispatch(receiveNotebookErrors(errors))
  );};
};
