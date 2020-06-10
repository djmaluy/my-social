import { authAPI } from "../../src/api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialSTate = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialSTate, action) => {
  // редюсер это ф-я, через которую идет модификация стейта

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state, //возвращаем копию всего стейта
        ...action.payload,
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getAuthUserData = () => async (dispatch) => {
  //async function return promise
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
