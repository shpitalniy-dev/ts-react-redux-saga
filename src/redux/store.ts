import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const configureStore = (preloadedState: any) => createStore(rootReducer, preloadedState, enhancer);

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export default store;
