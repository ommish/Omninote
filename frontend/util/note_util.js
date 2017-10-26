export const fetchNotes = () => {
  return $.ajax({
    url: 'api/posts',
    method: 'get',
  });
};

export const fetchNote = (noteId) => {
  return $.ajax({
    url: `api/posts/${noteId}`,
    method: 'get',
  });
};
