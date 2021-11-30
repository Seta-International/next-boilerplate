import { combineReducers } from 'redux';
import counterReducer from '../redux/counters/counterSlice';
import userReducer from '../redux/users/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

export default rootReducer;
