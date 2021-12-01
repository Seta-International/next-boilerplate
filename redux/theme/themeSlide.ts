import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'app/store';
import { HYDRATE } from 'next-redux-wrapper';

const keyStore = 'darkmode';

const getInitialState = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const valueDark = window.localStorage.getItem(keyStore);
    if (typeof valueDark === 'string') {
      return valueDark === 'true';
    }
  }
  return false;
};

const initialState = {
  value: getInitialState(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => {
      const nextValue = !state.value;
      localStorage.setItem(keyStore, nextValue.toString());
      state.value = nextValue;
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

export const { TOGGLE_THEME } = themeSlice.actions;
export const selectTheme = (state: AppState) => state.theme.value;
export default themeSlice.reducer;
