import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Vitaliy"},
        {id: 2, name: "Natalie"},
        {id: 3, name: "Cristi"},
        {id: 4, name: "George"},
        {id: 5, name: "Ann"},
        {id: 6, name: "Fillip"}
    ];

    let messageData = [
        {id: 1, message: "OK"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "My name is Natalie"},
        {id: 4, message: "Good day"},
        {id: 5, message: "Hello"},
        {id: 6, message: "Goodbye"},
    ];
    let dialogsElement = dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}/>);
    let messageElement = messageData.map(message => <Message id={message.id} message={message.message}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElement }
            </div>
            <div className={classes.dialogsItem}>
                { messageElement }
            </div>
        </div>
    )
};

export default Dialogs;