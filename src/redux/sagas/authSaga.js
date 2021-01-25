import {put, takeEvery, all} from 'redux-saga/effects';
import {
  ADD,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../type';
import API from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* onSignUp(action) {
  try {
    let result = yield API.post('/api/users', {
      name: action.name,
      password: action.password,
      email: action.email,
    });
    yield AsyncStorage.setItem('@token', result.data.token);
    // if (action.navigation) {
    //   action.navigation.navigate('Home');
    // }
    yield put({type: SIGN_UP_SUCCESS, token: result.data.token});
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, onSignUp);
}
function* onSignIn(action) {
  try {
    let result = yield API.post('/api/auth', {
      email: action.email,
      password: action.password,
    });
    yield AsyncStorage.setItem('@token', result.data.token);
    yield put({type: SIGN_IN_SUCCESS, token: result.data.token});
  } catch (error) {
    console.log(error);
  }
}
export function* watchSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, onSignIn);
}
