import { photosAdapter } from '../adapters/photos';

const initialState = {
  photos: [],
};

export const ActionType = {
  LOAD_PHOTOS: 'LOAD_PHOTOS',
};

export const ActionCreator = {
  loadPhotos: (photos) => ({
    type: ActionType.LOAD_PHOTOS,
    payload: photos,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PHOTOS:
      return { ...state, photos: action.payload };
  }

  return state;
};

export const Operation = {
  loadPhotos: () => (dispatch, getState, api) => {
    return api
      .get('/photos')
      .then((res) => res.data.map(photosAdapter))
      .then((photos) => {
        dispatch(ActionCreator.loadPhotos(photos));
      });
  },
};
