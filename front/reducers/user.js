const dummyUser = {
  nickname: "서동열",
  Post: [],
  Followings: [],
  Followers: [],
}

const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: [],
}

export const LOG_IN = "LOG_IN"; //액숀의 이름
export const LOG_OUT = "LOG_OUT"; //액숀의 이름
export const SIGN_UP = 'SIGN_UP' //회원가입
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};
export const signUpSuccess = { type: SIGN_UP_SUCCESS, };
export const loginAction = { type: LOG_IN, }
export const logoutAction = { type: LOG_OUT, }



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case SIGN_UP:
      return {
        ...state,
        signUpData: action.data,
      };
    default:
      return {
        ...state,
      }
  }
};

export default reducer;