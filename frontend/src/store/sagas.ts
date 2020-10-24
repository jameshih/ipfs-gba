import { all } from 'redux-saga/effects';
import { userSaga } from './user/userSaga';

export default function* rootSaga() {
    yield all([userSaga()]);
}
