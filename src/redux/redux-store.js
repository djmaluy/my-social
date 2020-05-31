import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({     // это функция, у которой внутри обьект
  profilePage: profileReducer,  // свойство - значение. за каждое свойство отвечает свой редьюсер
  dialogsPage: dialogsReducer,  // свойства из нашего файла Store
  sidebar: sidebarReducer,  // здесь мы комбайним три наших reducers from our Store
  usersPage: usersReducer

});


let store = createStore(reducers);
// createStore создает внутри себя State, у которого есть значение-редьюсеры

window.store = store;
export default store;