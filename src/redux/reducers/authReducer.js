import {act} from 'react-test-renderer';
import {SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, SET_LOGIN, LOG_OUT} from '../type';
const initialState = {
  token: null,
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {...state, token: action.token};

    case SIGN_IN_SUCCESS:
      return {...state, token: action.token};
    case SET_LOGIN:
      return {...state, isLogin: true};
    case LOG_OUT:
      return {...state, isLogin: false};
    default:
      return state;
  }
};
