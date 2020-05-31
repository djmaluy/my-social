import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, text: "Hi, how are you?", likesCount: 12},
        {id: 2, text: "it is my first post", likesCount: 25},
      ],
      textNewPost: "some another text",
    },
    dialogsPage: {
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
        {id: 2, text: "How are you?"},
        {id: 3, text: "I'm well"},
      ],
      newMessageText: "",
    },
    sidebar: {
      names: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Anton"}
      ]
    }
  },
  _callSubscriber() {
    console.log("was changed");
  },
  getState() {  //определенный метод, который можно вызывать из вне и он будет менять внутренность state
    return this._state;
  },
  subscribe(observer) { //определенный метод, который можно вызывать из вне и он будет менять внутренность state
    this._callSubscriber = observer;
  },

  dispatch(action) { //метод,который отправляет в store action(обьект, должен иметь type: ''
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar =  sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}


export default store;
// window.store = store;
// export default store;