import { actions } from 'store/reducers/usersReducer';

export const selectUser = (user) => (dispatch) => {
  dispatch(actions.setSelectedUser(user));
};

export const setUsers = (users) => (dispatch) => {
  dispatch(actions.setUsers(users));
};
