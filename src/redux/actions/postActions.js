import {POST_REQUEST, GET_ALL_POST_REQUEST} from '../type';
export const submitPost = (post) => ({
  type: POST_REQUEST,
  post: post,
});
export const getAllPost = () => ({
  type: GET_ALL_POST_REQUEST,
});
