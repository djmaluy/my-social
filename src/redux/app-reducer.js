import { getAuthUserData } from "./auth-reducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

let initialSTate = {
  initialized: null,
};

const appReducer = (state = initialSTate, action) => {
  // редюсер это ф-я, через которую идет модификация стейта

  switch (action.type) {
    case INITIALIZING_SUCCESS:
      return {
        ...state, //возвращаем копию всего стейта
        initialized: true,
      };

    default:
      return state;
  }
};
export const initializingSuccess = () => ({
  type: INITIALIZING_SUCCESS,
});
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(initializingSuccess());
  });
};
export default appReducer;
