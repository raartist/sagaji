import { call, put, takeEvery } from "@redux-saga/core/effects";

const apiUrl = "http://13.127.87.149:8080/ielts_cms/v1/api/gethomescreendata";

function getApi() {
  return fetch(apiUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.responseData)
    .catch((err) => {
      throw err;
    });
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: "GET_USERS_SUCCESS", users });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTS", fetchUsers);
}

export default userSaga;
