import { Checkbox } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, TOGGLE_THEME } from 'redux/theme/themeSlide';

const ButtonTheme = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  return <Checkbox onChange={() => dispatch(TOGGLE_THEME())} value={mode} />;
};

export default ButtonTheme;
