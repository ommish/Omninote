var snakeCase = require('snake-case');

export const createFlag = (flag) => {
  const snakeCaseFlag = {};
  Object.keys(flag).forEach((flagParam) => {snakeCaseFlag[snakeCase(flagParam)] = flag[flagParam];});

  return $.ajax({
    url: 'api/flags',
    method: 'post',
    data: {flag: snakeCaseFlag},
  });
};

export const deleteFlag = (flagId) => {
  return $.ajax({
    url: `api/flags/${flagId}`,
    method: `delete`,
  });
};
