const initialState = {
  mainPosts: [],
}

const ADD_POST = "ADD_POST"; //액숀의 이름
const ADD_DUMMY = "ADD_DUMMY"; //액숀의 이름

const addPost = {
  type:ADD_POST,
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
    default : 
      return {
        ...state,
    }
  }
};

export default reducer;