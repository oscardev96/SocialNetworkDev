import {SIGN_IN_REQUEST, SIGN_UP_REQUEST, SET_LOGIN, LOG_OUT} from '../type';
export const setLogin = () => ({
  type: SET_LOGIN,
});
export const logOut = () => ({
  type: LOG_OUT,
});
export const signUpAction = (name, email, password) => ({
  type: SIGN_UP_REQUEST,
  name,
  email,
  password,
});
export const signInAction = (email, password) => ({
  type: SIGN_IN_REQUEST,
  email,
  password,
});
