import {
    WritingsState,
    WritingsAction,
} from './types';

const initialState: WritingsState = {
};

export default function writingsReducer(
    state = initialState,
    action: WritingsAction,
): WritingsState {
    switch (action.type) {
        default:
            return state;
    }
}
