const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
  posts: [
    {id: 1, text: "Hi, how are you?", likesCount: 12},
    {id: 2, text: "it is my first post", likesCount: 25},  // без этого обьекта мы получим undefined
  ],
  textNewPost: "some another text",
}
//если вначале не передан state, а в начале redux не может его передать(у него его нет)
//то параметром по умолчанию будет initialState(обьект), который будет инициализировать нашу подветку
//этот одноразовый обьект будет начальным стейтом.
// После диспатча наших екшнов стейт будет потом всегда будет приходить обновленный

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        text: state.textNewPost,
        likesCount: 4
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        textNewPost: ""
      };

    }
    case UPDATE_NEW_POST: {
      return {
        ...state,
        textNewPost: action.newText
      }

    }
    default:          //получает state и возвращает state если никакого action не нашлось
      return state;

  }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text
})

export default profileReducer;