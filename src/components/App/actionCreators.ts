import { INCREMENT_SAGA, DECREMENT_SAGA, SET_NUMBER } from '../../redux/actionTypes';
import { typeAppAction, typeAppSagaAction } from './types';

export const setNumber = (number: number): typeAppAction => ({ type: SET_NUMBER, payload: { number } });
export const incrementSaga = (): typeAppSagaAction => ({ type: INCREMENT_SAGA });
export const decrementSaga = (): typeAppSagaAction => ({ type: DECREMENT_SAGA });