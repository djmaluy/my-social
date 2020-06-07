const ADD_MESSAGE = "ADD-MESSAGE";

let initialSTate = {
  dialogs: [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Viktor" },
    { id: 3, name: "Zina" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Vano" },
    { id: 6, name: "Arsen" },
  ],
  messages: [
    { id: 1, text: "Hi" },
    { id: 2, text: "How are you?" }, //одноразовый обьект, который будет параметром по умолчанию
    { id: 3, text: "I'm well" }, // если не придет стейт в dialogsReducer
  ],
};

const dialogsReducer = (state = initialSTate, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 5, text: text }],
      };

    default:
      return state;
  }
};
export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
