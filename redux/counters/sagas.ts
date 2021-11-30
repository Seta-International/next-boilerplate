import { delay, put, take } from 'redux-saga/effects';
import { START_CLOCK, tickClock } from './counterSlice';

function* runClockSaga() {
  yield take(START_CLOCK.type);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

export default runClockSaga;
