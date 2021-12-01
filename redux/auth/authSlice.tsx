import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'app/store';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  loading: false,
  isAuth: false,
  user: {},
  fromPath: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.isAuth = false;
      state.user = {};
    },
    SET_REDIRECT: (state, action) => {
      state.fromPath = action.payload.fromPath;
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

export const { LOGIN, LOGOUT, SET_REDIRECT } = authSlice.actions;
export const selectAuth = (state: AppState) => state.auth;
export default authSlice.reducer;
