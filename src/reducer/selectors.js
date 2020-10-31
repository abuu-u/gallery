export const getPhotos = (state) => state.photos;

export const getPhotoById = (state, id) =>
  state.photos.find((photo) => photo.id === id);
