export const sortItems = (notes, sortOrder) => {
  return notes.sort(comparingFunctions[sortOrder]);
};

const updatedAtNewest = (a, b) => {
  if (a.updatedAt > b.updatedAt) {
    return -1;
  }
  else if (a.updatedAt < b.updatedAt) {
    return 1;
  } else {
    return 0;
  }
};

const updatedAtOldest = (a, b) => {
  if (a.updatedAt < b.updatedAt) {
    return -1;
  }
  else if (a.updatedAt > b.updatedAt) {
    return 1;
  } else {
    return 0;
  }
};

const createdAtNewest = (a, b) => {
  if (a.createdAt > b.createdAt) {
    return -1;
  }
  else if (a.createdAt < b.createdAt) {
    return 1;
  } else {
    return 0;
  }
};

const createdAtOldest = (a, b) => {
  if (a.createdAt < b.createdAt) {
    return -1;
  }
  else if (a.createdAt > b.createdAt) {
    return 1;
  } else {
    return 0;
  }
};

const titleAsc = (a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  else if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
};

const titleDesc = (a, b) => {
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return -1;
  }
  else if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
};


const comparingFunctions = [
  updatedAtNewest,
  createdAtNewest,
  updatedAtOldest,
  createdAtOldest,
  titleAsc,
  titleDesc
];
