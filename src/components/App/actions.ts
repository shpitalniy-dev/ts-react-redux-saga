import { takeEvery, select, put } from 'redux-saga/effects';
import { INCREMENT_SAGA, DECREMENT_SAGA } from '../../redux/actionTypes';
import { getNumber } from './selectors';
import { setNumber } from './actionCreators';

function* sagaOnIncrement() {
    const number: number = yield select(getNumber);
    yield put(setNumber(number + 1));
}

function* sagaOnDecrement() {
    const number: number = yield select(getNumber);
    yield put(setNumber(number - 1));
}

export function* appSagaWatcher() {
    yield takeEvery(INCREMENT_SAGA, sagaOnIncrement);
    yield takeEvery(DECREMENT_SAGA, sagaOnDecrement);
}