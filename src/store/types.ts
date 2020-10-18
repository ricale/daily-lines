import { Reducer, CombinedState } from "redux";

import { WritingsState } from './writings/types';

export interface RootState {
    writings: WritingsState
}

export type BaseAction = {
    type: string
    requestParams?: any
    payload?: any
    meta: {
        timestamp: number
        message?: string
    }
}

export type RootReducer = Reducer<CombinedState<RootState>, BaseAction>

export * from './writings/types';
