export const types = {
  SET_SELECTED_USER: 'users/SET_SELECTED_USER',
  SET_USERS: 'users/SET_USERS',
};

const init = {
  selectedUser: {},
  users: [],
};

export default function UsersReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_SELECTED_USER:
      return { ...state, selectedUser: payload };
    case types.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
}

export const actions = {
  setSelectedUser: (user) => ({ type: types.SET_SELECTED_USER, payload: user }),
  setUsers: (users) => ({ type: types.SET_USERS, payload: users }),
};
