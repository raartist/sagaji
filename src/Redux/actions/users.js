import * as type from "../types";

export function getUsers(users) {
  return {
    type: type.GET_USERS_REQUESTS,
    payload: users,
  };
}

export function doneUsers(users) {
  return {
    type: type.GET_USERS_SUCCESS,
    payload: users,
  };
}
