import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

const appReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line
    state = null;
  }

  return appReducer(state, action);
};

export default rootReducer;
