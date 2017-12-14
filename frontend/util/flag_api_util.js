export const createFlag = (flag) => {
  return $.ajax({
    url: 'api/flags',
    method: 'post',
    data: {flag},
  });
};

export const deleteFlag = (flagId) => {
  return $.ajax({
    url: `api/flags/${flagId}`,
    method: `delete`,
  });
};
