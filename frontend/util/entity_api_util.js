export const fetchAll = () => {
  return $.ajax({
    url: 'api/all_items',
    method: 'get',
  });
};
