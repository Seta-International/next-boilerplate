import { put, takeLatest } from 'redux-saga/effects';
import { User } from 'types/user';
import { userApi } from '../../api/user';
import { failure, loadDataSuccess, LOAD_DATA } from './userSlice';

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
    yield takeLatest(LOAD_DATA.type, loadDataSaga);
}

export default userSaga;
