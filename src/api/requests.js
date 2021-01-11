import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.apiSite,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchComments = (postId) => {
  return instance
    .get(`posts/${postId}/comments`)
    .catch((e) => console.error(e.message))
    .then((r) => r.data);
};
