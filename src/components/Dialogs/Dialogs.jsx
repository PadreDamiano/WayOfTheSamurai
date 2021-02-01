import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

let newPostElement = React.createRef();
let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
};

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name} img={dialog.img}/>);
    let messageElement = props.state.messageData.map(message => <Message id={message.id} message={message.message}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                { dialogsElement }
            </div>
            <div className={classes.dialogsItem}>
                { messageElement }
            </div>
            <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick = {addPost} >OK</button>
            </div>
        </div>
    )
};

export default Dialogs;