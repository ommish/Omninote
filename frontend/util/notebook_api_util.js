// export const fetchNotebooks = () => {
//   return $.ajax({
//     url: 'api/notebooks',
//     method: 'get',
//   });
// };
//
// export const fetchNotebook = (notebookId) => {
//   return $.ajax({
//     url: `api/notebooks/${notebookId}`,
//     method: 'get',
//   });
// };

export const createNotebook = (notebook) => {
  return $.ajax({
    url: 'api/notebooks',
    method: 'post',
    data: { notebook }
  });
};

export const updateNotebook = (notebook) => {
  return $.ajax({
    url: `api/notebooks/${notebook.id}`,
    method: 'patch',
    data: { notebook }
  });
};

export const deleteNotebook = (notebookId) => {
  return $.ajax({
    url: `api/notebooks/${notebookId}`,
    method: 'delete',
  });
};
