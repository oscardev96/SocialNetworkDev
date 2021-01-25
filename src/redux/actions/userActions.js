import {GET_USER_REQUEST, CREATE_PROFILE_REQUEST} from '../type';
export const getUser = () => ({
  type: GET_USER_REQUEST,
});
export const postUser = (
  status,
  skills,
  exp,
  edu,
  company,
  github,
  location,
  website,
) => ({
  type: CREATE_PROFILE_REQUEST,
  status,
  skills,
  exp,
  edu,
  company,
  github,
  location,
  website,
});
