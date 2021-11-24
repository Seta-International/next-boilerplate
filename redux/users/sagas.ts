import { put, takeLatest } from "redux-saga/effects";
import { User } from "types/user";
import { userApi } from "../../api/user";
import { actionTypes, failure, loadDataSuccess } from "./actions";

function* loadDataSaga() {
  try {
    const users: User[] = yield userApi.getUsers();
    console.log('user', users);
    yield put(loadDataSuccess(users));
  } catch (err) {
    yield put(failure(err));
  }
}

function* userSaga() {
  yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga);
}

export default userSaga;
