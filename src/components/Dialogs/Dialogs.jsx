import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControl/FormsControl";
import { required, maxLengthCreator } from "../../utils/validators/validator";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((message) => (
    <Message text={message.text} key={message.id} id={message.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>
      <div>{messagesElement}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          name="newMessageText"
          component={Textarea}
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
