
import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = "HELLO_SAGA";
const BUY_SAGA = 'BUY_SAGA';

function loginAPI() {
  //서버에 요청
}

function* login() {
  try {
    yield call(loginAPI); //동기호출
    yield put({ type: LOG_IN_SUCCESS });
  } catch (e) {
    console.log(e);
    yield put({ type: LOG_IN_FAILURE });
  }
}

function* watchLogin() {
  //yield takeLatest(LOG_IN, login) //로그인이라는 액션이 들어오기를 기다림.
  yield take(LOG_IN_REQUEST);
  yield put({ type: LOG_IN_SUCCESS });
}

function* hello() {
  yield delay(1000);
  yield put({ type: 'BYE_SAGA' });
}

function* watchHello() {
  yield takeEvery(HELLO_SAGA, hello);
}

//여기가 시작점
//yield 는 중단점이다.
//take는 중단점 실행을 나타내는 트리거 같은 놈인듯
//put은 사가의 디스패치 라고 볼수 있다
//call은 동기요청 fork는 비동기 요청
export default function* userSaga() {
  yield all([
    fork(watchHello),
    fork(watchLogin),
  ]);
  // console.log('aaaa');
  // yield helloSaga();
}