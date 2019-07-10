import { all, fork, takeLatest } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

function loginAPI() {
  //서버에 요청
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({ type: LOG_IN_SUCCESS });
  } catch (e) {
    console.log(e);
    yield put({ type: LOG_IN_FAILURE });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login) //로그인이라는 액션이 들어오기를 기다림.
}

export default function* userSaga() {
  yield all([
    fork(watchLogin);
  ]);
}