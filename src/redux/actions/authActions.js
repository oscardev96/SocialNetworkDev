import {SIGN_IN_REQUEST, SIGN_UP_REQUEST} from '../type';

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
