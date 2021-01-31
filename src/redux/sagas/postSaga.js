import {put, takeEvery, all} from 'redux-saga/effects';
import {
  POST_REQUEST,
  POST_SUCCESS,
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
} from '../type';
import API from '../../../config';

function* onGetAllPost(action) {
  try {
    let result = yield API.get('/api/posts');

    yield put({type: GET_ALL_POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetAllPost() {
  yield takeEvery(GET_ALL_POST_REQUEST, onGetAllPost);
}

function* onPost(action) {
  try {
    let result = yield API.post('/api/posts', {text: action.post});

    yield put({type: POST_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchPost() {
  yield takeEvery(POST_REQUEST, onPost);
}
