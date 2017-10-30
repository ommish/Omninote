var snakeCase = require('snake-case');

// export const fetchNotes = () => {
//   return $.ajax({
//     url: 'api/notes',
//     method: 'get',
//   });
// };
//
// export const fetchNote = (noteId) => {
//   return $.ajax({
//     url: `api/notes/${noteId}`,
//     method: 'get',
//   });
// };

export const createNote = (note) => {
  const snakeCaseNote = {};
  Object.keys(note).forEach((noteParam) => {snakeCaseNote[snakeCase(noteParam)] = note[noteParam];});
  return $.ajax({
    url: `api/notes`,
    method: 'post',
    data: { note: snakeCaseNote }
  });
};

export const updateNote = (note) => {
  const snakeCaseNote = {};
  Object.keys(note).forEach((noteParam) => {snakeCaseNote[snakeCase(noteParam)] = note[noteParam];});
  return $.ajax({
    url: `api/notes/${note.id}`,
    method: 'patch',
    data: { note: snakeCaseNote }
  });
};

export const deleteNote = (noteId) => {
  return $.ajax({
    url: `api/notes/${noteId}`,
    method: 'delete',
  });
};
