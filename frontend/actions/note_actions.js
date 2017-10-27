import * as NoteUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES,
    notes,
  };
};

export const receiveNote = (note) => {
  return {
    type: RECEIVE_NOTE,
    note,
  };
};

export const removeNote = (note) => {
  return {
    type: REMOVE_NOTE,
    note,
  };
};

export const receiveNoteErrors = (errors) => {
  return {
    type: RECEIVE_NOTE_ERRORS,
    errors: errors.responseJSON,
  };
};


export const fetchNotes = () => {
  return (dispatch) => {
    return NoteUtil.fetchNotes()
    .then((notes) => dispatch(receiveNotes(notes)));
  };
};

export const fetchNote = (noteId) => {
  return (dispatch) => {
    return NoteUtil.fetchNote(noteId)
    .then((noteRes) => dispatch(receiveNote(noteRes)));
  };
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    return NoteUtil.deleteNote(noteId)
    .then((note) => dispatch(removeNote(note)));
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
