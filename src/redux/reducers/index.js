import {combineReducers} from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
export const rootReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
});
