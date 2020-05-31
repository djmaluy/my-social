import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
  let messagesElement = state.messages.map(message => <Message text={message.text} key={message.id} id={message.id}/>);
  let newMessageText = state.newMessageText;

  let addMessage = () => {
    props.addMessage();
  }

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogsElement}
        </div>
        <div>{messagesElement}
          <div>
          <textarea placeholder="Enter your message"
                    onChange={onNewMessageChange}
                    value={newMessageText}/>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>

      </div>
  )
}

export default Dialogs;