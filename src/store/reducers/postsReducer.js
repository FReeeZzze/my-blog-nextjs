export const types = {
  SET_POSTS: 'posts/SET_POSTS',
  SET_COMMENTS: 'posts/SET_COMMENTS',
};

const init = {
  posts: [],
  comments: [],
};

export default function PostsReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_POSTS:
      return { ...state, posts: payload };
    case types.SET_COMMENTS:
      return { ...state, comments: [...state.comments, ...payload] };
    default:
      return state;
  }
}

export const actions = {
  setPosts: (posts) => ({ type: types.SET_POSTS, payload: posts }),
  setComments: (comments) => ({ type: types.SET_COMMENTS, payload: comments }),
};
