const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialSTate = {
  dialogs: [
    {id: 1, name: "Oleg"},
    {id: 2, name: "Viktor"},
    {id: 3, name: "Zina"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Vano"},
    {id: 6, name: "Arsen"},
  ],
  messages: [
    {id: 1, text: "Hi"},
    {id: 2, text: "How are you?"},  //одноразовый обьект, который будет параметром по умолчанию
    {id: 3, text: "I'm well"},      // если не придет стейт в dialogsReducer
  ],
  newMessageText: "",
}

const dialogsReducer = (state = initialSTate, action) => {


  switch (action.type) {
    case ADD_MESSAGE:
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {id: 5, text: text}]
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    default:
      return state;
  }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
})

export default dialogsReducer;