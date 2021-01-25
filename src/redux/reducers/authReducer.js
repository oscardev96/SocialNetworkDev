import {act} from 'react-test-renderer';
import {SIGN_UP_SUCCESS, SIGN_IN_SUCCESS} from '../type';
const initialState = {
  token: null,
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {...state, token: action.token, isLogin: true};

    case SIGN_IN_SUCCESS:
      return {...state, token: action.token, isLogin: true};

    default:
      return state;
  }
};
