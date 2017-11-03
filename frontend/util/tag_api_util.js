var snakeCase = require('snake-case');

export const createTag = (tag) => {
  const snakeCaseTag = {};
  Object.keys(tag).forEach((tagParam) => {snakeCaseTag[snakeCase(tagParam)] = tag[tagParam];});
  return $.ajax({
    url: 'api/tags',
    method: 'post',
    data: { tag: snakeCaseTag }
  });
};

export const deleteTag = (tagId) => {
  return $.ajax({
    url: `api/tags/${tagId}`,
    method: 'delete',
  });
};
