import { SET_NUMBER } from '../../redux/actionTypes';
import { typeAppInitState, typeAppAction } from './types';

const initialState: typeAppInitState = {
    number: 0,
}

const appReducer = (state = initialState, { type, payload }: typeAppAction): typeAppInitState => {
    switch (type) {
        case SET_NUMBER:
            return {
                ...state,
                number: payload.number,
            }
        default:
            return state;
    }
}

export default appReducer;