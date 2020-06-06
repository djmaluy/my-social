import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, text: "Hi, how are you?", likesCount: 12 },
    { id: 2, text: "it is my first post", likesCount: 25 }, // без этого обьекта мы получим undefined
  ],
  textNewPost: "some another text",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        text: state.textNewPost,
        likesCount: 4,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        textNewPost: "",
      };
    }
    case UPDATE_NEW_POST: {
      return {
        ...state,
        textNewPost: action.newText,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
