
export const createTag = (tag) => {
  return $.ajax({
    url: 'api/tags',
    method: 'post',
    data: { tag }
  });
};

export const updateTag = (tag) => {
  return $.ajax({
    url: `api/tags/${tag.id}`,
    method: 'patch',
    data: { tag }
  });
};

export const deleteTag = (tagId) => {
  return $.ajax({
    url: `api/tags/${tagId}`,
    method: 'delete',
  });
};
