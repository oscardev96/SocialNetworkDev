import {put, takeEvery, all, call} from 'redux-saga/effects';
import {watchSignIn, watchSignUp} from './authSaga';
import {watchGetUser, watchPostUser, watchGetAllProfile} from './userSaga';
import {watchGetAllPost, watchPost} from './postSaga';
function* helloSaga() {
  console.log('Hello Sagas!');
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    call(watchSignUp),
    call(watchSignIn),
    call(watchGetUser),
    call(watchPostUser),
    call(watchGetAllProfile),
    call(watchGetAllPost),
    call(watchPost),
  ]);
}
