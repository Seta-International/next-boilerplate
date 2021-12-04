import { combineReducers } from 'redux';
import authReducer from 'redux/auth/authSlice';
import counterReducer from '../redux/counters/counterSlice';
import userReducer from '../redux/users/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
