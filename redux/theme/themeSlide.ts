import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'app/store';

const initialState = {
  value: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => {
      state.value = !state.value;
    },
  },
});

export const { TOGGLE_THEME } = themeSlice.actions;
export const selectTheme = (state: AppState) => state.theme.value;
export default themeSlice.reducer;
