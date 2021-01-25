import {put, takeEvery, all} from 'redux-saga/effects';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCES,
} from '../type';
import API from '../../../config';

function* onGetUser(action) {
  try {
    let result = yield API.get('/api/profile/me');

    yield put({type: GET_USER_SUCCESS, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetUser() {
  yield takeEvery(GET_USER_REQUEST, onGetUser);
}

function* onPostUser(action) {
  try {
    let result = yield API.post('/api/profile', {
      status: action.status,
      skills: action.skills,
      exp: action.exp,
      edu: action.edu,
      company: action.company,
      github: action.github,
      location: action.location,
      website: action.website,
    });

    yield put({type: CREATE_PROFILE_SUCCES, data: result.data});
  } catch (error) {
    console.log(error);
  }
}
export function* watchPostUser() {
  yield takeEvery(CREATE_PROFILE_REQUEST, onPostUser);
}
