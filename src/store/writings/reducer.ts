import {
    WritingsState,
    WritingsAction,
} from './types';
import { actionTypes as t } from './actions';

const initialState: WritingsState = {
};

export default function writingsReducer(
    state = initialState,
    action: WritingsAction,
): WritingsState {
    switch (action.type) {
        case t.REQUEST_GET_WRITINGS: return state;
        case t.FAILURE_GET_WRITINGS: return state;
        case t.SUCCESS_GET_WRITINGS: 
            return {
                ...state
            };
        default:
            return state;
    }
}
