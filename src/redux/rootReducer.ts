import { combineReducers } from 'redux';
import appReducer from '../components/App/reducer';

const rootReducer = combineReducers({ app: appReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;