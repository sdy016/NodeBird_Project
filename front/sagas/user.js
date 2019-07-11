import {
  all,
  fork,
  takeLatest,
  takeEvery,
  call,
  put,
  take,
  delay,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function loginAPI() {
  //서버에 요청
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000); //2초 딜레이
    yield put({
      // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    throw new Error('에러에러에러');
    yield put({
      // put은 dispatch 동일
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

//여기가 시작점
//yield 는 중단점이다.
//take는 중단점 실행을 나타내는 트리거 같은 놈인듯
//put은 사가의 디스패치 라고 볼수 있다
//call은 동기요청 fork는 비동기 요청
export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLogin)]);
  // console.log('aaaa');
  // yield helloSaga();
}
