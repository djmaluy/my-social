import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    //обьект в который передадутся свойства addMessage и др. через пропс
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Dialogs
); /* создает контейнерную компон.,
внутри которой рендерит презентационную компон. и в нее в пропсax передает свойства которые находятся в
 mapStateToProps, mapDispatchToProps */
export default DialogsContainer;
