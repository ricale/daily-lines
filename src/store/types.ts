import { Reducer, CombinedState } from "redux";

export interface RootState {

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
