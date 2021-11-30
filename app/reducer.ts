import { combineReducers } from 'redux';
import themeReducer from 'redux/theme/themeSlide';
import counterReducer from '../redux/counters/counterSlice';
import userReducer from '../redux/users/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
