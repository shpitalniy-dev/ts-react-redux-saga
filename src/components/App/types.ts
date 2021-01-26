import { INCREMENT_SAGA, DECREMENT_SAGA, SET_NUMBER } from '../../redux/actionTypes';

export type typeAppInitState = {
    number: number,
};

interface IIncrementAction {
    type: typeof INCREMENT_SAGA,
}

interface IDecrementAction {
    type: typeof DECREMENT_SAGA,
}

interface ISetNumberAction {
    type: typeof SET_NUMBER,
    payload: {
        number: number,
    }
}

export type typeAppAction = ISetNumberAction;
export type typeAppSagaAction = IIncrementAction | IDecrementAction;