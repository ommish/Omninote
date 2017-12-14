
export const createNotebook = (notebook) => {
  return $.ajax({
    url: 'api/notebooks',
    method: 'post',
    data: { notebook },
  });
};

export const deleteNotebook = (notebookId) => {
  return $.ajax({
    url: `api/notebooks/${notebookId}`,
    method: 'delete',
  });
};
