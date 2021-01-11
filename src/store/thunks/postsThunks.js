import { actions } from 'store/reducers/postsReducer';
import { fetchComments } from 'api/requests';

export const setPosts = (posts) => async (dispatch) => {
  dispatch(actions.setPosts(posts));
};

export const fetchCommentsByPostId = (id) => async (dispatch) => {
  const comments = await fetchComments(id);
  dispatch(actions.setComments(comments));
};
