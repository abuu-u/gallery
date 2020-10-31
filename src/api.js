import axios from 'axios';

export const createAPI = () => {
  return axios.create({
    baseURL: 'https://api.unsplash.com',
    timeout: 1000 * 5,
    headers: {
      'Accept-Version': 'v1',
      Authorization:
        'Client-ID cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    },
  });
};
