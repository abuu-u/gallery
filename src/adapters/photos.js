export const photosAdapter = (data) => ({
  id: data.id,
  size: {
    width: data.width,
    height: data.height,
  },
  description: data.description?.trim(),
  altDescription: data.alt_description?.trim(),
  url: data.urls.raw,
  user: {
    name: data.user.name,
  },
});
