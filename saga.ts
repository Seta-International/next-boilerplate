import { all, fork } from "redux-saga/effects";
import counterSage from './redux/counters/sagas';
import userSaga from "./redux/users/sagas";

function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(counterSage),
  ]);
}

export default rootSaga;
