import { AnyAction, createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { User } from 'types/user';

const initialState = {
  error: {},
  users: [] as User[],
  placeholderData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    FAILURE: (state, action: AnyAction) => {
      state.error = action.error;
    },
    LOAD_DATA_SUCCESS: (state, action: AnyAction) => {
      state.users = action.data;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { FAILURE, LOAD_DATA_SUCCESS } = userSlice.actions;

export const LOAD_DATA = createAction('LOAD_DATA');

export function loadDataSuccess(data: User[]) {
  return {
    type: LOAD_DATA_SUCCESS.type,
    data,
  };
}

export function failure(error: unknown) {
  return {
    type: FAILURE.type,
    error,
  };
}

export default userSlice.reducer;
