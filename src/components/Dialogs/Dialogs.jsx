import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const NameDialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}
let dialogsData = [
    {name: "Vitaliy", id: "1"},
    {name: "Natalie", id: "2"},
    {name: "Cristi", id: "3"},
    {name: "George", id: "4"},
    {name: "Ann", id: "5"},
    {name: "Fillip", id: "6"}
];
let messageData = [
    {id: "1", message: "Hello"},
    {id: "2", message: "How are you?"},
    {id: "3", message: "My name is Natalie"},
    {id: "4", message: "Good day"},
    {id: "5", message: "Goodbye"},
    {id: "6", message: "Yo!"}
];
const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <NameDialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <NameDialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <NameDialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <NameDialog name={dialogsData[3].name} id={dialogsData[3].id} />
                <NameDialog name={dialogsData[4].name} id={dialogsData[4].id} />
                <NameDialog name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
)
}
export default Dialogs;