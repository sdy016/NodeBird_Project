const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }],
  imagePaths: [],
}

export const ADD_POST = "ADD_POST"; //액숀의 이름
export const ADD_DUMMY = "ADD_DUMMY"; //액숀의 이름

const addPost = {
  type: ADD_POST,
}

const addDummy = {
  type: ADD_DUMMY,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
      }
    case ADD_POST:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      }
    default:
      return {
        ...state,
      }
  }
};

export default reducer;