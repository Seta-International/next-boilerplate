import { combineReducers } from 'redux';
import counterReducer from './redux/counters/reducer';
import userReducer from './redux/users/reducer';

const reducer = combineReducers({
  user: userReducer,
  counter: counterReducer
})

export default reducer;
