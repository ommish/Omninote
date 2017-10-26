export const fetchNotes = () => {
  return $.ajax({
    url: 'api/notes',
    method: 'get',
  });
};

export const fetchNote = (noteId) => {
  return $.ajax({
    url: `api/notes/${noteId}`,
    method: 'get',
  });
};

export const createNote = (notebookId, note) => {
  return $.ajax({
    url: `api/notebooks/${notebookId}/notes`,
    method: 'post',
    data: { note }
  });
};

export const updateNote = (note) => {
  return $.ajax({
    url: `api/notes/${note.id}`,
    method: 'patch',
    data: { note }
  });
};

export const deleteNote = (noteId) => {
  return $.ajax({
    url: `api/notes/${noteId}`,
    method: 'delete',
  });
};
