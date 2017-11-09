import * as NoteUtil from '../util/note_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveNote = ({note, tags, notebooks, prevTags}) => {
  return {
    type: RECEIVE_NOTE,
    note,
    tags,
    notebooks,
    prevTags,
  };
};

export const removeNote = ({note, tags, notebooks}) => {
  return {
    type: REMOVE_NOTE,
    note,
    tags,
    notebooks
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
    .then((noteRes) => dispatch(receiveNote(noteRes)),
    (errors) => dispatch(receiveNoteErrors(errors))
  );};
};

export const updateNote = (note) => {
  return (dispatch) => {
    return NoteUtil.updateNote(note)
    .then((noteRes) => dispatch(receiveNote(noteRes)),
    (errors) => dispatch(receiveNoteErrors(errors))
  );};
};
