import { fork, all } from 'redux-saga/effects';
import { appSagaWatcher } from '../components/App/actions';

const sagas: any = [appSagaWatcher];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
