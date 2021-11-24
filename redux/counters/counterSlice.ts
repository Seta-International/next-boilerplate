import { AnyAction, createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../../app/store';
export interface ICounterState {
    count: number;
    error: boolean;
    lastUpdate: number;
    light: boolean;
    placeholderData?: string;
}

const initialState: ICounterState = {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: undefined,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        FAILURE: (state, action: AnyAction) => {
            return {
                ...state,
                ...{ error: action.error },
            };
        },
        INCREMENT: (state) => {
            return {
                ...state,
                ...{ count: state.count + 1 },
            };
        },
        DECREMENT: (state) => {
            return {
                ...state,
                ...{ count: state.count - 1 },
            };
        },
        RESET: (state) => {
            return {
                ...state,
                ...{ count: initialState.count },
            };
        },
        LOAD_DATA_SUCCESS: (state, action: AnyAction) => {
            return {
                ...state,
                ...{ placeholderData: action.data },
            };
        },
        TICK_CLOCK: (state, action: AnyAction) => {
            return {
                ...state,
                ...{ lastUpdate: action.ts, light: !!action.light },
            };
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
});

export const {
    FAILURE,
    INCREMENT,
    DECREMENT,
    RESET,
    LOAD_DATA_SUCCESS,
    TICK_CLOCK,
} = counterSlice.actions;

export const START_CLOCK = createAction('counter/START_CLOCK');

export function tickClock(isServer: boolean) {
    return {
        type: TICK_CLOCK.type,
        light: !isServer,
        ts: Date.now(),
    };
}

export const selectCount = (state: AppState) => state.counter.count;

export default counterSlice.reducer;
