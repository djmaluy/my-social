const SET_USER_DATA = "SET_USER_DATA";

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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export default authReducer;