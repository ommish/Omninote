export const createPhoto = (photoData) => {
  return $.ajax({
    method: 'post',
    url: 'api/photos',
    data: photoData,
    dataType: 'json',
    processData: false,
    contentType: false,
  });
};
