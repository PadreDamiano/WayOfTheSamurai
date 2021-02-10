import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogsReducer";
const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}
                                                                            img={dialog.img}/>);
    let messageElement = state.messageData.map(message => <Message id={message.id} message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.dialogsItem}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;