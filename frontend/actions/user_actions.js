import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const requestUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users)))
);

export const requestUser = username => dispatch => (
  UserAPIUtil.fetchUser(username)
  .then(
    // user => console.log('user: ', user)
    user => dispatch(receiveUser(user))
    )
);