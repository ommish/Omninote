import * as NoteUtil from '../util/note_api_util';

export const RECEIVE_NEW_NOTE = "RECEIVE_NEW_NOTE";
export const RECEIVE_UPDATED_NOTE = "RECEIVE_UPDATED_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveNewNote = ({note}) => {
  return {
    type: RECEIVE_NEW_NOTE,
    note,
  };
};

export const receiveUpdatedNote = ({note, tags, notebooks, flags}) => {
  return {
    type: RECEIVE_UPDATED_NOTE,
    note,
    tags,
    notebooks,
    flags,
  };
};

export const removeNote = ({noteId, notebookId, tagIds, flagId}) => {
  return {
    type: REMOVE_NOTE,
    noteId,
    tagIds,
    notebookId,
    flagId,
  };
};

export const receiveNoteErrors = (errors) => {
  return {
    type: RECEIVE_NOTE_ERRORS,
    errors: errors.responseJSON,
  };
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    return NoteUtil.deleteNote(noteId)
    .then((noteRes) => dispatch(removeNote(noteRes)));
  };
};

export const createNote = (note) => {
  return (dispatch) => {
    return NoteUtil.createNote(note)
    .then((noteRes) => dispatch(receiveNewNote(noteRes)),
    (errors) => dispatch(receiveNoteErrors(errors))
  );};
};

export const updateNote = (note) => {
  return (dispatch) => {
    return NoteUtil.updateNote(note)
    .then((noteRes) => dispatch(receiveUpdatedNote(noteRes)),
    (errors) => dispatch(receiveNoteErrors(errors))
  );};
};
